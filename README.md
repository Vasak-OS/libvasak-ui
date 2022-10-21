# LibVasak UI

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Vasak-OS_libvasak-ui&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Vasak-OS_libvasak-ui)

UI Library for Vasak Apps and VasakOS. This library is used to create a UI for Vasak Apps and VasakOS. This library is written in CSS and JS. 

## How to use

To use this library, you need to add the following code to your HTML file:

```html
/* CSS */
<link rel="stylesheet" href="file:///usr/lib/libvasak-ui/css/variables.css" />          // Variables (required)
<link rel="stylesheet" href="file:///usr/lib/libvasak-ui/css/animations.css" />         // Animations (required)
<link rel="stylesheet" href="file:///usr/lib/libvasak-ui/css/base.css" />               // Base (required)
<link rel="stylesheet" href="file:///usr/lib/libvasak-ui/css/loading_spheres.css" />    // Loading Spheres Module (optional)

/* JS */
<script src="file:///usr/lib/libvasak-ui/js/loading.js"></script>                       // Loading Module (optional)
```

## Modules

* Loading Spheres
* Animations
* Base

## Build LibVasak UI

[PKGBUILD](https://github.com/Vasak-OS/PKGBUILDS/blob/main/libvasak-ui/PKGBUILD)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

1. Fork it
2. Create your feature branch

```bash
git checkout -b feature/my-new-animation
```

3. Commit your changes 

```bash
git commit -am 'Add some my-new-animation'
```

4. Push to the branch

```bash
git push origin feature/my-new-animation
```

5. Create a new Pull Request

