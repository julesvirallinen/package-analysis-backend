const handle = require('../modules/parser')

const singlePackage = `
Package: ubuntu-standard
Status: install ok installed
Priority: optional
Section: metapackages
Installed-Size: 57
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Architecture: amd64
Source: ubuntu-meta
Version: 1.267
Depends: at, busybox-static, cpio
Recommends: apparmor, apt-transport-https, bash-completion, command-not-found, friendly-recovery, iputils-tracepath, irqbalance, manpages, mlocate, mtr-tiny, nano, ntfs-3g, openssh-client, plymouth, plymouth-theme-ubuntu-text, ppp, pppconfig, pppoeconf, tcpdump, telnet, ufw, update-manager-core, uuid-runtime
Description: The Ubuntu standard system
 This package depends on all of the packages in the Ubuntu standard system.
 This set of packages provides a comfortable command-line Unix-like
 environment.
 .
 It is also used to help ensure proper upgrades, so it is recommended that
 it not be removed.
`

const reverseDependencyPackages = `
Package: libdrm2
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 105
Maintainer: Ubuntu X-SWAT <ubuntu-x@lists.ubuntu.com>
Architecture: amd64
Source: libdrm
Version: 2.4.32-1ubuntu1
Depends: libc6 (>= 2.14)
Pre-Depends: multiarch-support
Description: Userspace interface to kernel DRM services -- runtime
 This library implements the userspace interface to the kernel DRM
 services.  DRM stands for "Direct Rendering Manager", which is the
 kernelspace portion of the "Direct Rendering Infrastructure" (DRI).
 The DRI is currently used on Linux to provide hardware-accelerated
 OpenGL drivers.
 .
 This package provides the runtime environment for libdrm.
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>

Package: libdrm-nouveau1a
Status: install ok installed
Multi-Arch: same
Priority: required
Section: libs
Installed-Size: 90
Maintainer: Ubuntu X-SWAT <ubuntu-x@lists.ubuntu.com>
Architecture: amd64
Source: libdrm
Version: 2.4.32-1ubuntu1
Depends: libdrm2 (>= 2.14)
Pre-Depends: multiarch-support
Conflicts: libdrm-nouveau1
Description: Userspace interface to nouveau-specific kernel DRM services -- runtime
 This library implements the userspace interface to the nouveau-specific kernel
 DRM services. DRM stands for "Direct Rendering Manager", which is the
 kernelspace portion of the "Direct Rendering Infrastructure" (DRI). The DRI is
 currently used on Linux to provide hardware-accelerated OpenGL drivers.
Original-Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
`

describe('parser', () => {
  test('parses single package', () => {
    const result = handle(singlePackage)
    const expected = {
      'ubuntu-standard': {
        Package: 'ubuntu-standard',
        Dependencies: ['at', 'busybox-static', 'cpio'],
        'Reverse dependencies': [],
        'Unavailable dependencies': [],
        Description:
          ' The Ubuntu standard system\n\n This package depends on all of the packages in the Ubuntu standard system. This set of packages provides a comfortable command-line Unix-like environment.\n\n It is also used to help ensure proper upgrades, so it is recommended that it not be removed.'
      }
    }
    expect(result).toStrictEqual(expected)
  })
  test('parses two packages with reverse dependency', () => {
    const result = handle(reverseDependencyPackages)
    const expected = {
      libdrm2: {
        Package: 'libdrm2',
        Dependencies: ['libc6'],
        'Reverse dependencies': ['libdrm-nouveau1a'],
        'Unavailable dependencies': [],
        Description:
          ' Userspace interface to kernel DRM services -- runtime\n\n This library implements the userspace interface to the kernel DRM services.  DRM stands for "Direct Rendering Manager", which is the kernelspace portion of the "Direct Rendering Infrastructure" (DRI). The DRI is currently used on Linux to provide hardware-accelerated OpenGL drivers.\n\n This package provides the runtime environment for libdrm.'
      },
      'libdrm-nouveau1a': {
        Package: 'libdrm-nouveau1a',
        Dependencies: ['libdrm2'],
        'Reverse dependencies': [],
        'Unavailable dependencies': [],
        Description:
          ' Userspace interface to nouveau-specific kernel DRM services -- runtime\n\n This library implements the userspace interface to the nouveau-specific kernel DRM services. DRM stands for "Direct Rendering Manager", which is the kernelspace portion of the "Direct Rendering Infrastructure" (DRI). The DRI is currently used on Linux to provide hardware-accelerated OpenGL drivers.'
      }
    }
    expect(result).toStrictEqual(expected)
  })
})
