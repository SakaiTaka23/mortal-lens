# mortal-lens justfile
# Command runner for development tasks

default:
    @just --list --unsorted

# Build all packages
build:
    pnpm build

# Check linting
lint:
    pnpm lint

# Fix linting issues
lint-fix:
    pnpm lint:fix

# Check formatting
format:
    pnpm format

# Fix formatting issues
format-fix:
    pnpm format:fix

# Run quality checks (format + lint + build)
check: format lint build

# Run quality checks and tests (format + lint + build + test)
check-full: format lint build
    just parser test
    just processor test
    just ui test
    just core test

# Run command in parser package
parser CMD:
    cd packages/parser && just {{CMD}}

# Run command in ui package
ui CMD:
    cd packages/ui && just {{CMD}}

# Run command in types package
types CMD:
    cd packages/types && just {{CMD}}

# Run command in processor package
processor CMD:
    cd packages/processor && just {{CMD}}

# Run command in core app
core CMD:
    cd app/core && just {{CMD}}

# Run command in web app
web CMD:
    cd app/web && just {{CMD}}

# Clean all build artifacts
clean:
    just parser clean
    just processor clean
    just ui clean
    just types clean
    just core clean
    just web clean

# Clean all node_modules
clean-deps:
    rm -rf node_modules
    just parser clean-deps
    just processor clean-deps
    just ui clean-deps
    just types clean-deps
    just core clean-deps
    just web clean-deps
