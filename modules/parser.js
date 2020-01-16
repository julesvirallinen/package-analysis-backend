var fs = require('fs')

const handle = string => {
  try {
    var data = fs.readFileSync('./status.real', 'utf8')
    console.log(data)
    const parsed = parse(data)
    const withReverse = reverseDeps(parsed)
    console.log(withReverse)
  } catch (e) {
    console.log('Error reading file:', e.stack)
  }
}

const parse = string => {
  var packages = string.split('\n\n')
  var result = {}

  packages.forEach(package => {
    var p = {}
    var lines = package.split('\n')
    const accepted = ['Package', 'Description']
    lines.forEach(line => {
      parts = line.split(':')
      if (accepted.includes(parts[0])) p[parts[0]] = parts[1].trim()
      //
      if (parts[0] === 'Depends') {
        var dependencies = []
        var deps = parts[1].split(',')
        deps = deps.map(dep => dep.split('(')[0].trim())
        var uniqueDeps = [...new Set(deps)]
        p['Dependencies'] = uniqueDeps
      }
      p['Reverse dependencies'] = []
      if (p['Dependencies'] === undefined) p['Dependencies'] = []
    })
    result[p['Package']] = p
  })

  return result
}

const reverseDeps = packages => {
  for (const [name, package] of Object.entries(packages)) {
    package['Dependencies'].forEach(dep => {
      if (packages[dep]) packages[dep]['Reverse dependencies'].push(name)
    })
  }
  return packages
}

handle(sample)
