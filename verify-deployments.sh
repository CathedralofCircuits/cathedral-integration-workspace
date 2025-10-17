#!/bin/bash

# Cathedral of Circuits - Deployment Verification Script
# This script checks all repository deployments and ensures nothing is lost

echo "🏛️ Cathedral of Circuits - Deployment Verification"
echo "================================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check URL availability
check_url() {
    local url=$1
    local repo_name=$2

    if curl -s --head --fail --max-time 10 "$url" > /dev/null 2>&1; then
        echo -e "${GREEN}✅ $repo_name${NC} - $url"
        return 0
    else
        echo -e "${RED}❌ $repo_name${NC} - $url (FAILED)"
        return 1
    fi
}

# Function to check local repository status
check_local_repo() {
    local repo_path=$1
    local repo_name=$2

    if [ -d "$repo_path" ]; then
        if [ -d "$repo_path/.git" ]; then
            echo -e "${GREEN}✅ $repo_name${NC} - Local repository exists"
            return 0
        else
            echo -e "${YELLOW}⚠️  $repo_name${NC} - Directory exists but not a git repository"
            return 1
        fi
    else
        echo -e "${RED}❌ $repo_name${NC} - Local repository missing"
        return 1
    fi
}

echo "🔍 Checking Local Repositories..."
echo "--------------------------------"

# Check local repositories
check_local_repo "./cathedral-monorepo" "Cathedral Monorepo"
check_local_repo "./circuitum99" "Circuitum 99"
check_local_repo "./codex-14499" "Codex 144:99"
check_local_repo "./cosmogenesis-learning-engine" "Cosmogenesis Learning Engine"
check_local_repo "./liber-arcanae" "Liber Arcanae"

echo ""
echo "🌐 Checking GitHub Pages Deployments..."
echo "--------------------------------------"

# Check GitHub Pages deployments
check_url "https://bekalah.github.io/cathedral-monorepo/" "Cathedral Monorepo"
check_url "https://bekalah.github.io/circuitum99/" "Circuitum 99"
check_url "https://bekalah.github.io/codex-14499/" "Codex 144:99"
check_url "https://bekalah.github.io/cosmogenesis-learning-engine/" "Cosmogenesis Learning Engine"
check_url "https://bekalah.github.io/liber-arcanae/" "Liber Arcanae"

echo ""
echo "🔗 Checking External Cloudflare Deployments..."
echo "---------------------------------------------"

# Check Cloudflare Pages deployments
check_url "https://codex.cathedral144.pages.dev/" "Codex Portal (Cloudflare)"
check_url "https://realms.cathedral144.pages.dev/" "Stone Cathedral Realms (Cloudflare)"
check_url "https://grimoire.cathedral144.pages.dev/" "Circuit Grimoire (Cloudflare)"

echo ""
echo "📊 Missing Repositories (Need to be cloned/created)..."
echo "---------------------------------------------------"

echo -e "${YELLOW}⚠️  cathedral-research${NC} - Research and development repository"
echo -e "${YELLOW}⚠️  stone-cathedral${NC} - Immersive Sacred Realms and 3D Cathedral Experience"

echo ""
echo "🔧 Recommendations:"
echo "-------------------"
echo "1. Clone missing repositories:"
echo "   git clone https://github.com/Bekalah/cathedral-research.git"
echo "   git clone https://github.com/Bekalah/stone-cathedral.git"
echo ""
echo "2. Set up GitHub Pages for repositories that failed deployment check"
echo ""
echo "3. Update CATHEDRAL_REPOSITORY_REGISTRY.json with any changes"
echo ""
echo "4. Run this script regularly to ensure all deployments are healthy"

echo ""
echo "🏛️ Cathedral of Circuits - Verification Complete"
