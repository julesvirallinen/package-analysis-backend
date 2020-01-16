var fs = require('fs')

const handle = input => {
  try {
    const parsed = parse(input)
    const withReverse = reverseDeps(parsed)
    // fs.writeFile('./sample.txt', JSON.stringify(withReverse), err => {
    //   if (err) {
    //     console.error(err)
    //     return
    //   }
    //   console.log('File has been created')
    // })
    return withReverse
  } catch (e) {
    console.log('Error reading file:', e.stack)
  }
}

const parse = input => {
  var packages = input.split('\n\n')
  var result = {}

  packages.forEach(package => {
    var p = {}
    var lines = package.split('\n')
    var description = ''
    var descGoingOn = false
    lines.forEach(line => {
      if (descGoingOn && line.charAt(0) === ' ') {
        if (line.charAt(1) === '.') description += '\n\n'
        else description += line
      }
      parts = line.split(':')
      if (parts[0] === 'Package') p['Package'] = parts[1].trim()
      // console.log(p['Description'])
      if (parts[0] === 'Depends')
        p['Dependencies'] = parseDependencies(parts[1])
      if (parts[0] === 'Description') {
        descGoingOn = true
        description += parts[1] + '\n\n'
      }
    })
    p['Reverse dependencies'] = []
    p['Unavailable dependencies'] = []
    p['Description'] = description
    if (p['Dependencies'] === undefined) p['Dependencies'] = []

    result[p['Package']] = p
  })

  return result
}

const parseDependencies = deps => {
  var deps = parts[1].split(',')
  deps = deps.map(dep => dep.split('(')[0].trim())
  var uniqueDeps = [...new Set(deps)]
  return uniqueDeps
}

const reverseDeps = packages => {
  for (const [name, package] of Object.entries(packages)) {
    package['Dependencies'].forEach(dep => {
      packages = checkForPipes(packages, dep, name)
      if (packages[dep]) packages[dep]['Reverse dependencies'].push(name)
    })
  }
  return packages
}

const checkForPipes = (packages, dependency, name) => {
  if (dependency.includes('|')) {
    var options = dependency.split('|')
    options.forEach(option => {
      option = option.trim()
      if (packages[option] !== undefined) {
        packages[name]['Dependencies'].push(option)
      } else {
        packages[name]['Unavailable dependencies'].push(option)
      }
    })
    packages[name]['Dependencies'].splice(
      packages[name]['Dependencies'].indexOf(dependency),
      1
    )
  }
  return packages
}

module.exports = handle
