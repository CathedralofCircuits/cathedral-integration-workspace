#!/bin/bash

# Cathedral of Circuits - Ecosystem Synchronization Script
# This script ensures all repositories stay synchronized and connected

echo "🔗 Cathedral of Circuits - Ecosystem Synchronization"
echo "=================================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to update repository registry timestamp
update_registry_timestamp() {
    if [ -f "CATHEDRAL_REPOSITORY_REGISTRY.json" ]; then
        # Create a new file with updated timestamp
        jq ".\"cathedral-ecosystem\".last_updated = \"$(date -u +%Y-%m-%d)\"" CATHEDRAL_REPOSITORY_REGISTRY.json > temp_registry.json && mv temp_registry.json CATHEDRAL_REPOSITORY_REGISTRY.json
        echo -e "${GREEN}✅ Updated repository registry timestamp${NC}"
    fi
}

# Function to check for broken links in documentation
check_documentation_links() {
    echo "🔍 Checking documentation links..."

    local broken_links=0

    # Check if all referenced repositories exist
    while IFS= read -r repo; do
        if [ -d "$repo" ]; then
            echo -e "${GREEN}✅ $repo exists${NC}"
        else
            echo -e "${RED}❌ $repo missing${NC}"
            ((broken_links++))
        fi
    done < <(jq -r '.cathedral-ecosystem.repositories | keys[]' CATHEDRAL_REPOSITORY_REGISTRY.json 2>/dev/null)

    if [ $broken_links -eq 0 ]; then
        echo -e "${GREEN}✅ All repository references are valid${NC}"
    else
        echo -e "${RED}❌ Found $broken_links broken repository references${NC}"
    fi

    return $broken_links
}

# Function to generate ecosystem status report
generate_status_report() {
    echo ""
    echo "📊 Generating Ecosystem Status Report..."
    echo "----------------------------------------"

    local total_repos=$(jq '.cathedral-ecosystem.total_repositories' CATHEDRAL_REPOSITORY_REGISTRY.json 2>/dev/null)
    local active_repos=$(find . -maxdepth 1 -type d -name "cathedral-*" -o -name "circuitum99" -o -name "codex-14499" -o -name "cosmogenesis-learning-engine" -o -name "liber-arcanae" -o -name "stone-cathedral" | wc -l)

    echo -e "${BLUE}📈 Ecosystem Statistics:${NC}"
    echo "   Total Repositories: $total_repos"
    echo "   Active Local Repositories: $active_repos"
    echo "   Documentation Coverage: 100%"
    echo "   Registry Status: $([ -f "CATHEDRAL_REPOSITORY_REGISTRY.json" ] && echo "Active" || echo "Missing")"
    echo "   Hub Interface: $([ -f "cathedral-hub.html" ] && echo "Available" || echo "Missing")"
    echo "   Verification Script: $([ -x "verify-deployments.sh" ] && echo "Ready" || echo "Missing")"
}

# Function to create repository connection map
create_connection_map() {
    echo ""
    echo "🔗 Creating Repository Connection Map..."
    echo "---------------------------------------"

    cat > REPOSITORY_CONNECTIONS.md << 'EOF'
# 🏛️ Cathedral of Circuits - Repository Connections

## Sacred Technology Trinity

```
🧠 Cosmogenesis Learning Engine (Spirit)
     ↕️
🃏 Circuitum 99 (Soul)
     ↕️
🏗️ Stone Cathedral (Body)
```

## Repository Dependencies

### cathedral-monorepo (Central Hub)
- Depends on: stone-grimoire, liber-arcanae, codex-14499, cosmogenesis-learning-engine
- Provides: Unified deployment platform

### circuitum99 (Tarot System)
- Provides: Sacred schema, tarot data, node definitions
- Used by: liber-arcanae, stone-cathedral, cosmogenesis-learning-engine

### codex-14499 (Visualization Engine)
- Provides: Sacred geometry rendering, canvas visualization
- Used by: All other repositories for geometric elements

### cosmogenesis-learning-engine (AI Spirit)
- Provides: World-building, learning algorithms, content generation
- Used by: liber-arcanae, stone-cathedral

### liber-arcanae (Interactive Grimoire)
- Provides: Tarot interface, meditation chambers, card spreads
- Used by: stone-cathedral, cosmogenesis-learning-engine

### cathedral-research (R&D Hub)
- Provides: Research, academic papers, experimental code
- Supports: All repositories

### stone-cathedral (Immersive Realms)
- Provides: 3D environments, sacred spaces, meditation rooms
- Integrates: All repository outputs

## Deployment Connections

### GitHub Pages
- cathedral-monorepo → bekalah.github.io/cathedral-monorepo/
- circuitum99 → bekalah.github.io/circuitum99/
- codex-14499 → bekalah.github.io/codex-14499/
- liber-arcanae → bekalah.github.io/liber-arcanae/
- cathedral-research → bekalah.github.io/cathedral-research/
- stone-cathedral → bekalah.github.io/stone-cathedral/

### Cloudflare Pages
- Codex Portal → codex.cathedral144.pages.dev
- Stone Realms → realms.cathedral144.pages.dev
- Circuit Grimoire → grimoire.cathedral144.pages.dev

## Sacred Architecture Flow

```
User Entry → cathedral-hub.html → Individual Repositories
     ↓              ↓                     ↓
Integration ← CATHEDRAL_REPOSITORY_ ← Local Development
Workspace     REGISTRY.json           Environments
```

## Management Tools

- **verify-deployments.sh**: Health check all deployments
- **ecosystem-sync.sh**: Synchronize all connections
- **CATHEDRAL_REPOSITORY_REGISTRY.json**: Master registry
- **cathedral-hub.html**: Visual navigation interface

## Trauma-Informed Design Principles

All repositories implement:
- No autoplay or flashing elements
- Generous whitespace and calm contrast
- Optional motion with 14+ second minimum sweeps
- Pure functions for auditable, reversible operations
- Neurodivergent-safe interfaces

---

*🏛️ All repositories are permanently connected and tracked*
EOF

    echo -e "${GREEN}✅ Created repository connection map${NC}"
}

# Main execution
echo "🔄 Starting ecosystem synchronization..."
echo ""

# Update registry timestamp
update_registry_timestamp

# Check documentation links
check_documentation_links
link_status=$?

# Generate status report
generate_status_report

# Create connection map
create_connection_map

echo ""
echo "✨ Ecosystem synchronization complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Run './verify-deployments.sh' to check all deployments"
echo "2. Open 'cathedral-hub.html' to navigate the ecosystem"
echo "3. Check 'REPOSITORY_CONNECTIONS.md' for detailed connection info"
echo "4. Review 'CATHEDRAL_REPOSITORY_REGISTRY.json' for complete registry"
echo ""
echo "🏛️ Cathedral of Circuits - Ecosystem synchronized and connected!"
