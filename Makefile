# Define packages
PACKAGES := app backend open-feedback

# Define commands
YARN := yarn
NPM := npm

.PHONY: install test lint build publish clean

# Install dependencies for all packages
install:
	$(YARN) install

# Run tests across all packages
test:
	$(YARN) test:all

# Lint all packages
lint:
	$(YARN) lint:all

# Build all packages
build:
	$(YARN) build:all

pretify:
	$(YARN) pretify:all

# Publish packages
publish:
	$(YARN) build:all
	$(NPM) publish

# Clean build artifacts
clean:
	$(YARN) clean
