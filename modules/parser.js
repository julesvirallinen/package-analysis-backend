const sample = `Package: libws-commons-util-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 101
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.0.1-7
Description: Common utilities from the Apache Web Services Project
 This is a small collection of utility classes, that allow high
 performance XML processing based on SAX.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://ws.apache.org/commons/util/

Package: python-pkg-resources
Status: install ok installed
Priority: optional
Section: python
Installed-Size: 175
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: distribute
Version: 0.6.24-1ubuntu1
Replaces: python2.3-setuptools, python2.4-setuptools
Provides: python2.6-setuptools, python2.7-setuptools
Depends: python (>= 2.6), python (<< 2.8)
Suggests: python-distribute, python-distribute-doc
Conflicts: python-setuptools (<< 0.6c8-3), python2.3-setuptools (<< 0.6b2), python2.4-setuptools (<< 0.6b2)
Description: Package Discovery and Resource Access using pkg_resources
 The pkg_resources module provides an API for Python libraries to
 access their resource files, and for extensible applications and
 frameworks to automatically discover plugins.  It also provides
 runtime support for using C extensions that are inside zipfile-format
 eggs, support for merging packages that have separately-distributed
 modules or subpackages, and APIs for managing Python's current
 "working set" of active packages.
Original-Maintainer: Matthias Klose <doko@debian.org>
Homepage: http://packages.python.org/distribute
Python-Version: 2.6, 2.7

Package: tcpd
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: net
Installed-Size: 132
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: tcp-wrappers
Version: 7.6.q-21
Replaces: libwrap0 (<< 7.6-8)
Depends: libc6 (>= 2.4), libwrap0 (>= 7.6-4~)
Description: Wietse Venema's TCP wrapper utilities
 Wietse Venema's network logger, also known as TCPD or LOG_TCP.
 .
 These programs log the client host name of incoming telnet,
 ftp, rsh, rlogin, finger etc. requests.
 .
 Security options are:
  - access control per host, domain and/or service;
  - detection of host name spoofing or host address spoofing;
  - booby traps to implement an early-warning system.
Original-Maintainer: Marco d'Itri <md@linux.it>

Package: libbsf-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 130
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1:2.4.0-5
Depends: libapache-pom-java
Suggests: bsh, libxalan2-java, rhino
Description: Bean Scripting Framework to support scripting languages in Java
 Bean Scripting Framework (BSF) is a set of Java classes which provides
 scripting language support within Java applications, and access to Java
 objects and methods from scripting languages. BSF allows one to write JSPs in
 languages other than Java while providing access to the Java class library. In
 addition, BSF permits any Java application to be implemented in part (or
 dynamically extended) by a language that is embedded within it. This is
 achieved by providing an API that permits calling scripting language engines
 from within Java, as well as an object registry that exposes Java objects to
 these scripting language engines.
 .
 BSF supports these scripting languages:
  * Python (using Jython)
  * JavaScript (using rhino)
  * XSLT Stylesheets (as a component of Apache XML project's Xalan and Xerces)
  * BeanShell (using bsh) via its own bsf adapter
 .
 Support for Tcl, NetRexx is not available in this Debian
 package since Jacl, NetRexx (non-free) are not packaged.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://jakarta.apache.org/bsf/

Package: libaspectj-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 11710
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: aspectj
Version: 1.6.12+dfsg-3
Replaces: aspectj (<< 1.6.10+dfsg-1)
Suggests: aspectj
Conflicts: aspectj (<< 1.6.10+dfsg-1)
Description: aspect-oriented extension for Java - library
 AspectJ enables the clean modularization of crosscutting concerns
 such as: error checking and handling, synchronization, context-sensitive
 behavior, performance optimizations, monitoring and logging, debugging
 support, multi-object protocols.
 .
 This package provides the JAR libraries of aspectj.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.eclipse.org/aspectj

Package: libslf4j-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 315
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.6.4-1
Suggests: libcommons-logging-java, liblog4j1.2-java
Description: Simple Logging Facade for Java
 The Simple Logging Facade for Java (or SLF4J) is intended to serve as
 a simple facade for various logging APIs allowing to the end-user to
 plug in the desired implementation at deployment time. SLF4J also
 allows for a gradual migration path away from Apache Commons
 Logging (CL)
 .
 Logging API implementations can either choose to implement the SLF4J
 interfaces directly, e.g. logback or SimpleLogger. Alternatively, it
 is possible (and rather easy) to write SLF4J adapters for the given
 API implementation, e.g. Log4jLoggerAdapter or JDK14LoggerAdapter.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.slf4j.org/

Package: libplexus-sec-dispatcher-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 89
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: plexus-sec-dispatcher
Version: 1.3.1-5
Depends: junit (>= 3.8.2), libplexus-cipher-java, libplexus-container-default-java, libplexus-utils-java
Suggests: libplexus-sec-dispatcher-java-doc
Description: Plexus Security Dispatcher Component used by Maven
 The Plexus project provides a full software stack for creating and
 executing software projects. Based on the Plexus container, the applications
 can utilise component-oriented programming to build modular, reusable
 components that can easily be assembled and reused.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: https://github.com/sonatype/plexus-sec-dispatcher

Package: libtext-wrapi18n-perl
Status: install ok installed
Priority: required
Section: perl
Installed-Size: 68
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.06-7
Depends: libtext-charwidth-perl
Description: internationalized substitute of Text::Wrap
 This module is a substitution for Text::Wrap, supporting
 multibyte characters such as UTF-8, EUC-JP, and GB2312, fullwidth
 characters such as east Asian characters, combining characters
 such as diacritical marks and Thai, and languages which don't
 use whitespaces between words such as Chinese and Japanese.
 .
 It provides wrap().
Original-Maintainer: Anibal Monsalve Salazar <anibal@debian.org>
Homepage: http://search.cpan.org/search?module=Text::WrapI18N

Package: java-common
Status: install ok installed
Multi-Arch: foreign
Priority: optional
Section: java
Installed-Size: 242
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 0.43ubuntu2
Suggests: default-jre, equivs
Description: Base of all Java packages
 This package must be installed in the system if a Java environment
 is desired. It covers useful information for Java users in
 Debian GNU/Linux, including:
  * The Java policy document which describes the layout of Java support in
    Debian and how Java packages should behave.
  * The Debian-Java-FAQ which provides information on the status of
    Java support in Debian, available compilers, virtual machines, Java
    programs and libraries as well as on legal issues.
  * Information on how to create dummy packages to fulfill java2
    requirements.
Original-Maintainer: Debian Java Mailing List <debian-java@lists.debian.org>

Package: libantlr-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 493
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: antlr
Version: 2.7.7+dfsg-3
Replaces: antlr (<< 2.7.7-8)
Breaks: antlr (<< 2.7.7-8)
Description: language tool for constructing recognizers, compilers etc (java library)
 ANTLR, ANother Tool for Language Recognition, (formerly PCCTS) is
 a language tool that provides a framework for constructing recognizers,
 compilers, and translators from grammatical descriptions containing C++
 or Java actions [You can use PCCTS 1.xx to generate C-based parsers].
 .
 This package contains the java libraries without a dependency on any runtime
 to be able to bootstrap gcj without a dependency on a java runtime.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.antlr2.org/

Package: libhttp-date-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 64
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 6.00-1
Replaces: libwww-perl (<< 6.00)
Depends: perl, libtimedate-perl
Breaks: libwww-perl (<< 6.00)
Description: module of date conversion routines
 HTTP::Date provides functions that deal the date formats used by the HTTP
 protocol (and then some more). Only the first two functions, time2str() and
 str2time(), are exported by default.
Original-Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
Homepage: http://search.cpan.org/dist/HTTP-Date/

Package: libio-stringy-perl
Status: install ok installed
Priority: optional
Section: perl
Installed-Size: 273
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: io-stringy
Version: 2.110-5
Depends: perl
Description: Perl modules for IO from scalars and arrays
 The libio-stringy-perl package (which corresponds to the CPAN package
 IO-stringy) provides the following Perl modules:
   IO::AtomicFile    Write a file which is updated atomically
   IO::Lines         I/O handle to read/write to array of lines
   IO::Scalar        I/O handle to read/write to a string
   IO::ScalarArray   I/O handle to read/write to array of scalars
   IO::Wrap          Wrap old-style FHs in standard OO interface
   IO::WrapTie       Tie your handles & retain full OO interface
Original-Maintainer: Bart Martens <bartm@debian.org>
Homepage: http://search.cpan.org/dist/IO-stringy/

Package: debconf
Status: install ok installed
Multi-Arch: foreign
Priority: required
Section: admin
Installed-Size: 609
Maintainer: Colin Watson <cjwatson@ubuntu.com>
Architecture: all
Version: 1.5.42ubuntu1
Replaces: debconf-tiny
Provides: debconf-2.0
Pre-Depends: perl-base (>= 5.6.1-4)
Recommends: apt-utils (>= 0.5.1), debconf-i18n
Suggests: debconf-doc, debconf-utils, whiptail | dialog | gnome-utils, libterm-readline-gnu-perl, libgtk2-perl (>= 1:1.130), libnet-ldap-perl, perl, libqtgui4-perl, libqtcore4-perl
Conflicts: apt (<< 0.3.12.1), cdebconf (<< 0.96), debconf-tiny, debconf-utils (<< 1.3.22), dialog (<< 0.9b-20020814-1), menu (<= 2.1.3-1), whiptail (<< 0.51.4-11), whiptail-utf8 (<= 0.50.17-13)
Conffiles:
 /etc/apt/apt.conf.d/70debconf 7e9d09d5801a42b4926b736b8eeabb73
 /etc/bash_completion.d/debconf 8fa1862734fbe54d7178aaaa419f5a11
 /etc/debconf.conf 8c0619be413824f1fc7698cee0f23811
Description: Debian configuration management system
 Debconf is a configuration management system for debian packages. Packages
 use Debconf to ask questions when they are installed.
Original-Maintainer: Debconf Developers <debconf-devel@lists.alioth.debian.org>

Package: libhttpcore-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 454
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: httpcomponents-core
Version: 4.1.4-1
Provides: libhttpcore-nio-java
Description: set of low level HTTP transport components for Java
 HttpCore is a set of low level HTTP transport components that can be used
 to build custom client and server side HTTP services with a minimal
 footprint. HttpCore supports two I/O models:
 .
  - blocking I/O model, based on the classic Java I/O;
  - non-blocking, event driven I/O model based on Java NIO.
 .
 The blocking I/O model may be more appropriate for data intensive, low
 latency scenarios, whereas the non-blocking model may be more appropriate
 for high latency scenarios where raw data throughput is less important
 than the ability to handle thousands of simultaneous HTTP connections in
 a resource efficient manner.
Original-Maintainer: David Paleino <dapal@debian.org>
Homepage: http://hc.apache.org/httpcomponents-core/index.html

Package: liblog4j1.2-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 465
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Source: apache-log4j1.2
Version: 1.2.16-3ubuntu1
Suggests: liblog4j1.2-java-doc, libgnumail-java, libmx4j-java
Description: Logging library for java
 log4j is a tool to help the programmer output log statements to a variety of
 output targets.
 .
 It is possible to enable logging at runtime without modifying the application
 binary. The log4j package is designed so that log statements can remain in
 shipped code without incurring a high performance cost.
 .
 One of the distinctive features of log4j is the notion of hierarchical
 loggers. Using loggers it is possible to selectively control which log
 statements are output at arbitrary granularity.
 .
 Log4j can output to: a file, a rolling file, a database with a JDBC driver,
 many output  asynchronously, a JMS Topic, a swing based logging console,
 the NT event log, /dev/null, a SMTP server (using javamail), a socket server,
 syslog, telnet daemon and stdout.
 .
 The format of the output can be defined using one of the various layout
 (or user defined layout) like: simple text, html, date, pattern defined and
 XML.
Homepage: http://logging.apache.org/log4j/1.2/
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: libjaxp1.3-java
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 661
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 1.3.05-2ubuntu2
Suggests: libjaxp1.3-java-gcj
Conflicts: libxalan2-java (<= 2.7.1-3)
Description: Java XML parser and transformer APIs (DOM, SAX, JAXP, TrAX)
 xml-apis.jar from the Apache XML Commons project is used by the Xerces-J XML
 parser and Xalan-J XSLT processor and specifies these APIs:
  * Document Object Model (DOM) level 3
  * Simple API for XML (SAX) 2.0.2
  * Java APIs for XML Processing (JAXP) 1.3.04
  * Transformation API for XML (TrAX) 1.3.04
  * Document Object Model (DOM) Level 3 Load and Save
  * JSR 206 Java API for XML Processing 1.3
 .
 These classes are also used in Sun's reference implementation. A GPL'ed
 implementation of these APIs can be found in the libgnujaxp-java package.
Homepage: http://java.sun.com/xml/jaxp/index.jsp
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>

Package: perl
Status: install ok installed
Priority: standard
Section: perl
Installed-Size: 17077
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Version: 5.14.2-6ubuntu2.2
Replaces: libarchive-tar-perl (<= 1.38-2), libcompress-raw-bzip2-perl, libcompress-raw-zlib-perl, libcompress-zlib-perl, libdevel-dprof-perl, libdigest-md5-perl, libdigest-sha-perl, libencode-perl, libio-compress-base-perl, libio-compress-bzip2-perl, libio-compress-perl, libio-compress-zlib-perl, libmime-base64-perl, libmodule-corelist-perl (<< 2.14-2), libstorable-perl, libsys-syslog-perl, libthreads-perl, libthreads-shared-perl, libtime-hires-perl, libtime-piece-perl, perl-base (<< 5.10.1-12), perl-doc (<< 5.8.0-1), perl-modules (<< 5.8.1-1)
Provides: data-dumper, libcompress-raw-bzip2-perl, libcompress-raw-zlib-perl, libcompress-zlib-perl, libdevel-dprof-perl, libdigest-md5-perl, libdigest-sha-perl, libencode-perl, libio-compress-base-perl, libio-compress-bzip2-perl, libio-compress-perl, libio-compress-zlib-perl, libmime-base64-perl, libstorable-perl, libsys-syslog-perl, libthreads-perl, libthreads-shared-perl, libtime-hires-perl, libtime-piece-perl, perl5
Depends: perl-base (= 5.14.2-6ubuntu2.2), perl-modules (>= 5.14.2-6ubuntu2.2), libbz2-1.0, libc6 (>= 2.14), libdb5.1, libgdbm3 (>= 1.8.3), zlib1g (>= 1:1.2.3.3.dfsg)
Recommends: netbase
Suggests: perl-doc, libterm-readline-gnu-perl | libterm-readline-perl-perl, make
Breaks: libcompress-raw-bzip2-perl (<< 2.033), libcompress-raw-zlib-perl (<< 2.033), libcompress-zlib-perl (<< 2.033), libdevel-dprof-perl (<< 20110228.00), libdigest-md5-perl (<< 2.51), libdigest-sha-perl (<< 5.61), libencode-perl (<< 2.42.01), libio-compress-base-perl (<< 2.033), libio-compress-bzip2-perl (<< 2.033), libio-compress-perl (<< 2.033), libio-compress-zlib-perl (<< 2.033), libmime-base64-perl (<< 3.13), libstorable-perl (<< 2.27), libsys-syslog-perl (<< 0.27), libthreads-perl (<< 1.83), libthreads-shared-perl (<< 1.37), libtime-hires-perl (<< 1.9721.01), libtime-piece-perl (<< 1.20.01), mrtg (<< 2.16.3-3.1), perl-doc (<< 5.14.2-1)
Conflicts: doc-base (<< 0.10.3), libjson-pp-perl (<< 2.27200-2), libxml-sax-perl (<< 0.99+dfsg-1ubuntu0.1), mono-gac (<< 2.10.8.1-1)
Description: Larry Wall's Practical Extraction and Report Language
 An interpreted scripting language, known among some as "Unix's Swiss
 Army Chainsaw".
 .
 Perl is optimised for scanning arbitrary text files and system
 administration.  It has built-in extended regular expression matching
 and replacement, a data-flow mechanism to improve security with
 setuid scripts and is extensible via modules that can interface to C
 libraries.
Original-Maintainer: Niko Tyni <ntyni@debian.org>

Package: junit
Status: install ok installed
Priority: optional
Section: java
Installed-Size: 195
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: all
Version: 3.8.2-8
Recommends: default-jre (>= 1.4) | default-jre-headless (>= 1.4) | java2-runtime | java2-runtime-headless
Suggests: junit-doc
Enhances: ant-optional
Description: Automated testing framework for Java
 JUnit is a simple framework for writing and running automated tests.
 As a political gesture, it celebrates programmers testing their own
 software.
Original-Maintainer: Debian Java Maintainers <pkg-java-maintainers@lists.alioth.debian.org>
Homepage: http://www.junit.org
`

const handle = string => {
  const parsed = parse(string)
  const withReverse = reverseDeps(parsed)
  console.log(withReverse)
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
      if(p['Dependencies'] === undefined) p['Dependencies'] = []
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
