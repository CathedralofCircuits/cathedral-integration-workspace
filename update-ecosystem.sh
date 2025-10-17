//////////////////////////////////////////////////////#!/bin/bash

# Cathedral Ecosystem Update Script
# Updates all connected repositories with latest cathedral-monorepo changes

set -e

echo "🏰 Starting Cathedral Ecosystem Update..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Main cathedral repository
CATHEDRAL_REPO="https://github.com/Bekalah/cathedral-monorepo.git"

# Repositories to update
REPOS=(
  "cosmogenesis-learning-engine"
  "circuitum99"
  "liber-arcanae"
  "stone-grimoire"
)

print_status "🔄 Updating all connected repositories..."

for repo in "${REPOS[@]}"; do
    print_status "Updating $repo..."

    if [ -d "../$repo" ]; then
        cd "../$repo"

        # Add cathedral remote if not exists
        if ! git remote get-url cathedral >/dev/null 2>&1; then
            print_status "Adding cathedral remote to $repo..."
            git remote add cathedral "$CATHEDRAL_REPO"
        fi

        # Fetch latest changes
        print_status "Fetching latest changes..."
        git fetch cathedral

        # Merge changes (allow unrelated histories)
        print_status "Merging cathedral changes..."
        git merge cathedral/main --allow-unrelated-histories || {
            print_warning "Merge conflict in $repo, manual resolution may be needed"
            continue
        }

        # Push updated main branch
        print_status "Pushing updates..."
        git push origin main

        print_success "✅ $repo updated successfully"
        cd "../cathedral-research"
    else
        print_warning "Repository $repo not found locally, skipping..."
    fi
done

print_status "🌐 Setting up unified deployment..."

# Create deployment configuration
cat > ../cathedral-deployment-config.json << 'EOF'
{
  "mainDomain": "cathedral.pages.dev",
  "routes": {
    "/": "cathedral-monorepo",
    "/mind": "cosmogenesis-learning-engine",
    "/soul": "circuitum99",
    "/body": "stone-grimoire",
    "/companions": "liber-arcanae",
    "/api": "azure-functions"
  },
  "repositories": {
    "cathedral-monorepo": "https://github.com/Bekalah/cathedral-monorepo",
    "cosmogenesis-learning-engine": "https://github.com/Bekalah/cosmogenesis-learning-engine",
    "circuitum99": "https://github.com/Bekalah/circuitum99",
    "stone-grimoire": "https://github.com/Bekalah/stone-grimoire",
    "liber-arcanae": "https://github.com/Bekalah/liber-arcanae"
  },
  "lastUpdate": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF

print_status "📝 Creating deployment documentation..."

# Create deployment guide
cat > ../CATHEDRAL_DEPLOYMENT_GUIDE.md << 'EOF'
# 🏰 Cathedral Ecosystem Deployment Guide

## Quick Start

### 1. Deploy Main Hub
```bash
cd cathedral-monorepo
pnpm build:all
wrangler pages publish dist --project-name=cathedral-main
```

### 2. Deploy Connected Apps
```bash
# Deploy each app to its subdomain
cd ../cosmogenesis-learning-engine
npm run build
wrangler pages publish dist --project-name=cosmogenesis

cd ../circuitum99
npm run build
wrangler pages publish dist --project-name=circuitum99

cd ../stone-grimoire
npm run build
wrangler pages publish dist --project-name=stone-grimoire

cd ../liber-arcanae
npm run build
wrangler pages publish dist --project-name=liber-arcanae
```

### 3. Configure Routing
Set up redirects in main hub:
```
/mind/* https://cosmogenesis-learning-engine.pages.dev/:splat 200
/soul/* https://circuitum99.pages.dev/:splat 200
/body/* https://stone-grimoire.pages.dev/:splat 200
/companions/* https://liber-arcanae.pages.dev/:splat 200
```

## Architecture

```
🌐 cathedral.pages.dev (Main Hub)
├── / → cathedral-monorepo (landing & navigation)
├── /mind → cosmogenesis-learning-engine (learning & AI)
├── /soul → circuitum99 (circuits & nodes)
├── /body → stone-grimoire (grimoire & tools)
├── /companions → liber-arcanae (tarot & arcana)
└── /api → Azure Functions (processing & API)
```

## Repository Structure

### Main Repository: cathedral-monorepo
- **Purpose**: Central hub and shared systems
- **Tech**: Turborepo, pnpm, TypeScript
- **Features**: All packages, documentation, deployment

### Connected Applications:
- **cosmogenesis-learning-engine**: AI-powered mystical education
- **circuitum99**: Circuit visualization and node systems
- **stone-grimoire**: Living grimoire and research tools
- **liber-arcanae**: Tarot and arcana systems

## Development Workflow

### Update All Repositories
```bash
./update-ecosystem.sh
```

### Deploy All Applications
```bash
./deploy-ecosystem.sh
```

### Test Integration
```bash
# Test cross-repository connections
cd cathedral-monorepo
pnpm test:integration
```

## Monitoring

- **Main Hub**: cathedral.pages.dev
- **Health Checks**: Automated monitoring
- **Performance**: Core Web Vitals tracking
- **Analytics**: User interaction tracking

## Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Clear caches and rebuild
   pnpm clean:all
   pnpm install
   pnpm build
   ```

2. **Routing Issues**
   ```bash
   # Check _redirects file in main hub
   cat cathedral-monorepo/public/_redirects
   ```

3. **Dependency Conflicts**
   ```bash
   # Update all dependencies
   pnpm update -r
   ```

## Support

- 📖 [Documentation](https://cathedral-research.github.io/docs)
- 💬 [Discord Community](https://discord.gg/cathedral-research)
- 🐛 [Issue Tracker](https://github.com/Bekalah/cathedral-monorepo/issues)

---

*Last Updated: $(date)*
*Deployment Status: $(cat ../cathedral-deployment-config.json | jq -r '.lastUpdate')*
EOF

print_success "✅ Cathedral Ecosystem update complete!"
echo ""
echo "🌐 Your unified cathedral ecosystem is ready!"
echo ""
echo "📋 Next Steps:"
echo "   1. Review updated repositories"
echo "   2. Test cross-app functionality"
echo "   3. Deploy to production"
echo "   4. Set up monitoring"
echo ""
echo "🏰 Your Digital Cathedral is Complete!"
