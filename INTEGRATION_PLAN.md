# Cathedral Research Updates Integration Plan

## Source Updates Location
`/Users/rebeccalemke/Library/Mobile Documents/com~apple~CloudDocs/cathedral-research/`

## Target: Cathedral Monorepo
`https://github.com/Bekalah/cathedral-monorepo.git`

## Integration Mapping

### 1. Apps Updates → packages/
```
BUILDING CATHEDRALS/apps/arcanae-lab/          → packages/arcanae-lab/
BUILDING CATHEDRALS/apps/cathedral-of-circuits/ → packages/cathedral-of-circuits/
BUILDING CATHEDRALS/apps/stone-grimoire/       → packages/stone-grimoire/
```

### 2. Package Updates → packages/
```
BUILDING CATHEDRALS/packages/art-engine/       → packages/art-engine/
BUILDING CATHEDRALS/packages/bridge-system/    → packages/bridge-system/
BUILDING CATHEDRALS/packages/hooks/            → packages/hooks/
BUILDING CATHEDRALS/packages/science-engine/   → packages/science-engine/
BUILDING CATHEDRALS/packages/sound-kernel/     → packages/sound-kernel/
BUILDING CATHEDRALS/packages/synthesis-engine/ → packages/synthesis-engine/
```

### 3. Core System Updates → shared/core-system/
```
BUILDING CATHEDRALS/data/codex.144_99.json     → shared/core-system/
BUILDING CATHEDRALS/data/codex.music.enriched.json → shared/core-system/
BUILDING CATHEDRALS/resources/audio-map.json   → shared/core-system/
BUILDING CATHEDRALS/resources/catalog.json     → shared/core-system/
```

### 4. Technical Infrastructure → tools/
```
cathedral-technical/book-processor/             → tools/book-processor/
cathedral-technical/engines/                   → shared/engines/
cathedral-technical/scripts/                   → tools/scripts/
```

### 5. Documentation Updates → docs/
```
cathedral-docs/README_INTEGRATION.md           → docs/
cathedral-docs/README_AUDIO_SYSTEM.md          → docs/
cathedral-docs/instructions/                   → docs/instructions/
```

### 6. Azure Functions → tools/api/
```
BUILDING CATHEDRALS/api/                       → tools/api/
```

### 7. GitHub Workflows → .github/
```
BUILDING CATHEDRALS/.github/workflows/         → .github/workflows/
BUILDING CATHEDRALS/.github/chatmodes/         → .github/chatmodes/
```

## Integration Steps

### Phase 1: Backup and Preparation
1. Create backup branch in cathedral-monorepo
2. Create integration branch
3. Document current state

### Phase 2: Core Updates
1. Update shared/core-system/ with new datasets
2. Update shared/engines/ with technical engines
3. Update tools/ with processing scripts

### Phase 3: Package Integration
1. Add new packages to packages/
2. Update existing packages with improvements
3. Update pnpm-workspace.yaml

### Phase 4: Apps Integration
1. Add new apps to packages/
2. Update package.json dependencies
3. Test cross-package imports

### Phase 5: Infrastructure
1. Update GitHub workflows
2. Add Azure Functions setup
3. Update documentation

### Phase 6: Testing and Deployment
1. Test monorepo build
2. Update Cloudflare configuration
3. Deploy and verify

## Commands to Execute

```bash
# 1. Setup integration branch
cd cathedral-integration-workspace/cathedral-monorepo
git checkout -b integration-cathedral-research-updates
git push -u origin integration-cathedral-research-updates

# 2. Copy core system updates
cp -r ../../cathedral-research/BUILDING\ CATHEDRALS/data/* shared/core-system/
cp -r ../../cathedral-research/BUILDING\ CATHEDRALS/resources/* shared/core-system/

# 3. Copy technical engines
cp -r ../../cathedral-research/cathedral-technical/engines/* shared/engines/

# 4. Add new packages
cp -r ../../cathedral-research/BUILDING\ CATHEDRALS/packages/* packages/
cp -r ../../cathedral-research/BUILDING\ CATHEDRALS/apps/* packages/

# 5. Add tools
mkdir -p tools
cp -r ../../cathedral-research/cathedral-technical/book-processor tools/
cp -r ../../cathedral-research/cathedral-technical/scripts tools/
cp -r ../../cathedral-research/BUILDING\ CATHEDRALS/api tools/

# 6. Update documentation
cp -r ../../cathedral-research/cathedral-docs/* docs/

# 7. Update GitHub config
cp -r ../../cathedral-research/BUILDING\ CATHEDRALS/.github/* .github/

# 8. Commit and push
git add .
git commit -m "Integrate cathedral-research updates into monorepo"
git push origin integration-cathedral-research-updates
```

## Post-Integration Tasks

1. Update package.json workspace configuration
2. Update pnpm-workspace.yaml
3. Test build system
4. Update README.md
5. Create pull request for review
6. Update Cloudflare deployment configuration

## Verification Checklist

- [ ] All packages build successfully
- [ ] Cross-package imports work
- [ ] Shared resources accessible
- [ ] Documentation updated
- [ ] GitHub workflows functional
- [ ] Azure Functions deployable
- [ ] Cloudflare deployment ready