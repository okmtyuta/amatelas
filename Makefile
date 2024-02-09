patch-amatelas-angular:
	cd packages/amatelas/angular; npm version patch
patch-amatelas-astro:
	cd packages/amatelas/astro; npm version patch
patch-amatelas-lib:
	cd packages/amatelas/lib; npm version patch
patch-amatelas-lit:
	cd packages/amatelas/lit; npm version patch
patch-amatelas-react:
	cd packages/amatelas/react; npm version patch
patch-amatelas-theme:
	cd packages/amatelas/theme; npm version patch
patch-amatelas-vue:
	cd packages/amatelas/vue; npm version patch

patch: patch-amatelas-lib patch-amatelas-theme patch-amatelas-angular patch-amatelas-astro patch-amatelas-lit patch-amatelas-react patch-amatelas-vue

publish-amatelas-angular:
	cd packages/amatelas/angular; npm version patch
publish-amatelas-astro:
	cd packages/amatelas/astro; npm version patch
publish-amatelas-lib:
	cd packages/amatelas/lib; npm version patch
publish-amatelas-lit:
	cd packages/amatelas/lit; npm version patch
publish-amatelas-react:
	cd packages/amatelas/react; npm version patch
publish-amatelas-theme:
	cd packages/amatelas/theme; npm version patch
publish-amatelas-vue:
	cd packages/amatelas/vue; npm version patch

# publish: publish-amatelas-lib publish-amatelas-theme publish-amatelas-angular publish-amatelas-astro publish-amatelas-lit publish-amatelas-react publish-amatelas-vue
publish: publish-amatelas-lib publish-amatelas-theme publish-amatelas-lit
patch-publish: patch publish
