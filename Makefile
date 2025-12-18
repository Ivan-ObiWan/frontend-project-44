.PHONY: install

install:
	npm ci
	@echo "Зависимости установлены!"

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
	@echo "✅ Проверка публикации завершена (dry run)"

lint:
	npx eslint .
