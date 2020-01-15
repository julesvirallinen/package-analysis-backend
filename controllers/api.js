const packagesRouter = require('express').Router()

packagesRouter.get('/sample', (request, response) => {
  const sample = {
    'libws-commons-util-java': {
      Package: 'libws-commons-util-java',
      'Reverse dependencies': [],
      Dependencies: [],
      Description: 'Common utilities from the Apache Web Services Project'
    },
    'python-pkg-resources': {
      Package: 'python-pkg-resources',
      'Reverse dependencies': [],
      Dependencies: ['python'],
      Description: 'Package Discovery and Resource Access using pkg_resources'
    },
    tcpd: {
      Package: 'tcpd',
      'Reverse dependencies': [],
      Dependencies: ['libc6', 'libwrap0'],
      Description: "Wietse Venema's TCP wrapper utilities"
    },
    'libbsf-java': {
      Package: 'libbsf-java',
      'Reverse dependencies': [],
      Dependencies: ['libapache-pom-java'],
      Description:
        'Bean Scripting Framework to support scripting languages in Java'
    },
    'libaspectj-java': {
      Package: 'libaspectj-java',
      'Reverse dependencies': [],
      Dependencies: [],
      Description: 'aspect-oriented extension for Java - library'
    },
    'libslf4j-java': {
      Package: 'libslf4j-java',
      'Reverse dependencies': [],
      Dependencies: [],
      Description: 'Simple Logging Facade for Java'
    },
    'libplexus-sec-dispatcher-java': {
      Package: 'libplexus-sec-dispatcher-java',
      'Reverse dependencies': [],
      Dependencies: [
        'junit',
        'libplexus-cipher-java',
        'libplexus-container-default-java',
        'libplexus-utils-java'
      ],
      Description: 'Plexus Security Dispatcher Component used by Maven'
    },
    'libtext-wrapi18n-perl': {
      Package: 'libtext-wrapi18n-perl',
      'Reverse dependencies': [],
      Dependencies: ['libtext-charwidth-perl'],
      Description: 'internationalized substitute of Text'
    },
    'java-common': {
      Package: 'java-common',
      'Reverse dependencies': [],
      Dependencies: [],
      Description: 'Base of all Java packages'
    },
    'libantlr-java': {
      Package: 'libantlr-java',
      'Reverse dependencies': [],
      Dependencies: [],
      Description:
        'language tool for constructing recognizers, compilers etc (java library)'
    },
    'libhttp-date-perl': {
      Package: 'libhttp-date-perl',
      'Reverse dependencies': [],
      Dependencies: ['perl', 'libtimedate-perl'],
      Description: 'module of date conversion routines'
    },
    'libio-stringy-perl': {
      Package: 'libio-stringy-perl',
      'Reverse dependencies': [],
      Dependencies: ['perl'],
      Description: 'Perl modules for IO from scalars and arrays'
    },
    debconf: {
      Package: 'debconf',
      'Reverse dependencies': [],
      Dependencies: [],
      Description: 'Debian configuration management system'
    },
    'libhttpcore-java': {
      Package: 'libhttpcore-java',
      'Reverse dependencies': [],
      Dependencies: [],
      Description: 'set of low level HTTP transport components for Java'
    },
    'liblog4j1.2-java': {
      Package: 'liblog4j1.2-java',
      'Reverse dependencies': [],
      Dependencies: [],
      Description: 'Logging library for java'
    },
    'libjaxp1.3-java': {
      Package: 'libjaxp1.3-java',
      'Reverse dependencies': [],
      Dependencies: [],
      Description: 'Java XML parser and transformer APIs (DOM, SAX, JAXP, TrAX)'
    },
    perl: {
      Package: 'perl',
      'Reverse dependencies': ['libhttp-date-perl', 'libio-stringy-perl'],
      Dependencies: [
        'perl-base',
        'perl-modules',
        'libbz2-1.0',
        'libc6',
        'libdb5.1',
        'libgdbm3',
        'zlib1g'
      ],
      Description: "Larry Wall's Practical Extraction and Report Language"
    },
    junit: {
      Package: 'junit',
      'Reverse dependencies': ['libplexus-sec-dispatcher-java'],
      Dependencies: [],
      Description: 'Automated testing framework for Java'
    }
  }
  response.json(sample)
})

module.exports = packagesRouter
