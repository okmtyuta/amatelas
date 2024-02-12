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

# patch: patch-amatelas-lib patch-amatelas-theme patch-amatelas-angular patch-amatelas-astro patch-amatelas-lit patch-amatelas-react patch-amatelas-vue
patch: patch-amatelas-lib patch-amatelas-theme patch-amatelas-astro patch-amatelas-lit patch-amatelas-react patch-amatelas-vue

publish-amatelas-angular:
	cd packages/amatelas/angular; npm publish
publish-amatelas-astro:
	cd packages/amatelas/astro; npm publish
publish-amatelas-lib:
	cd packages/amatelas/lib; npm publish
publish-amatelas-lit:
	cd packages/amatelas/lit; npm publish
publish-amatelas-react:
	cd packages/amatelas/react; npm publish
publish-amatelas-theme:
	cd packages/amatelas/theme; npm publish
publish-amatelas-vue:
	cd packages/amatelas/vue; npm publish

# publish: publish-amatelas-lib publish-amatelas-theme publish-amatelas-angular publish-amatelas-astro publish-amatelas-lit publish-amatelas-react publish-amatelas-vue
publish: publish-amatelas-lib publish-amatelas-theme publish-amatelas-astro publish-amatelas-lit
patch-publish: patch publish
