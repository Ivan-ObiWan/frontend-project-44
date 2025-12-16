.PHONY: install

install:
	npm ci
	@echo "Зависимости установлены!"

brain-games:
	node bin/brain-games.js
