# Contributing to Cathedral Integration Workspace

Thank you for your interest in contributing! 🎉

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct.

## Getting Started

1. **Fork the repository**
   ```bash
   # Click "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/cathedral-integration-workspace.git
   cd cathedral-integration-workspace
   ```

3. **Install dependencies**
   ```bash
   pnpm install
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### 1. Make Your Changes

```bash
# Start development mode
pnpm dev

# Run tests in watch mode
pnpm test --watch

# Check types
pnpm type-check

# Lint code
pnpm lint
```

### 2. Write Tests

- Write unit tests for new functionality
- Ensure all tests pass: `pnpm test`
- Aim for >80% coverage

### 3. Commit Your Changes

We use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Format: <type>(<scope>): <description>

feat(godot-bridge): add color temperature conversion
fix(materials): resolve iridescence shader bug
docs(readme): update installation instructions
test(bridge): add integration tests
chore(deps): upgrade typescript to 5.7
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting changes
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance tasks

### 4. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 5. Open a Pull Request

- Use the PR template
- Link related issues
- Request review from maintainers

## Project Structure

```
cathedral-integration-workspace/
├── packages/
│   ├── godot-bridge/        # Godot 4.x integration
│   ├── three-engine/        # Three.js rendering
│   └── codex-engine/        # Research principles
├── apps/
│   └── cathedral-hub/       # Main application
├── docs/                    # Documentation
└── .github/                 # GitHub configuration
```

## Testing

### Run All Tests
```bash
pnpm test
```

### Run Specific Package Tests
```bash
pnpm -F @cathedral/godot-bridge test
```

### Coverage Report
```bash
pnpm test:coverage
```

## Code Style

- TypeScript strict mode enabled
- ESLint + Prettier for formatting
- Run `pnpm lint:fix` before committing

## Documentation

- Update README.md for major changes
- Add JSDoc comments for public APIs
- Update CHANGELOG.md following [Keep a Changelog](https://keepachangelog.com/)

## Questions?

- 💬 [Discord Community](https://discord.gg/cathedral-research)
- 📧 Email: dev@cathedral-research.org
- 🐛 [Open an issue](https://github.com/CathedralofCircuits/cathedral-integration-workspace/issues)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
