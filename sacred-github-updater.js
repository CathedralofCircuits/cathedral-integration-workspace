#!/usr/bin/env node

// 🏛️ Cathedral of Circuits - Sacred GitHub Updater
// Applies real sacred geometry mathematics to GitHub repositories

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SacredGitHubUpdater {
    constructor() {
        this.sacredIntegration = new (require('./github-sacred-integration.js').SacredGitHubIntegration)();
        this.repositories = this.loadActiveRepositories();
    }

    // Load active repositories from registry
    loadActiveRepositories() {
        try {
            const registry = JSON.parse(fs.readFileSync('CATHEDRAL_REPOSITORY_REGISTRY.json', 'utf8'));
            return Object.keys(registry.cathedral-ecosystem.repositories).filter(repo => {
                return registry.cathedral-ecosystem.repositories[repo].status === 'active';
            });
        } catch (e) {
            console.log('Registry not found, using default repositories');
            return ['cathedral-monorepo', 'circuitum99', 'codex-14499', 'cosmogenesis-learning-engine', 'liber-arcanae'];
        }
    }

    // Main update function
    async updateAllRepositories() {
        console.log('🏛️ Starting Sacred GitHub Integration Update...');
        console.log('===============================================');
        console.log('');

        for (const repo of this.repositories) {
            console.log(`🔮 Updating ${repo} with sacred geometry...`);

            try {
                await this.updateRepository(repo);
                console.log(`✅ ${repo} updated successfully`);
            } catch (error) {
                console.error(`❌ Failed to update ${repo}:`, error.message);
            }

            console.log('');
        }

        console.log('✨ Sacred GitHub integration update complete!');
    }

    // Update individual repository
    async updateRepository(repositoryName) {
        const repoPath = `./${repositoryName}`;

        if (!fs.existsSync(repoPath)) {
            console.log(`⚠️  Repository ${repositoryName} not found locally, skipping...`);
            return;
        }

        // Generate sacred workflow
        const workflowContent = this.sacredIntegration.exportSacredWorkflow(repositoryName);

        // Create .github/workflows directory
        const workflowsDir = path.join(repoPath, '.github', 'workflows');
        if (!fs.existsSync(workflowsDir)) {
            fs.mkdirSync(workflowsDir, { recursive: true });
        }

        // Write sacred workflow
        const workflowPath = path.join(workflowsDir, 'sacred-workflow.yml');
        fs.writeFileSync(workflowPath, workflowContent);

        // Update package.json with sacred metadata
        await this.updatePackageJson(repoPath, repositoryName);

        // Create sacred issue templates
        await this.createSacredIssueTemplates(repoPath);

        // Update README with sacred geometry principles
        await this.updateReadmeWithSacredPrinciples(repoPath, repositoryName);

        console.log(`   📐 Sacred workflow: ${workflowPath}`);
        console.log(`   📦 Package.json updated with sacred metadata`);
        console.log(`   🔮 Issue templates created`);
        console.log(`   📚 README enhanced with sacred principles`);
    }

    // Update package.json with sacred mathematics metadata
    async updatePackageJson(repoPath, repositoryName) {
        const packagePath = path.join(repoPath, 'package.json');

        if (!fs.existsSync(packagePath)) {
            return; // Skip if no package.json
        }

        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        const sacredConfig = this.sacredIntegration.generateRepositoryConfig(repositoryName);

        // Add sacred metadata to package.json
        packageJson.sacred = {
            geometry: {
                golden_ratio: true,
                fibonacci_sequences: true,
                platonic_solids: true,
                vesica_piscis: true
            },
            visionary_art: {
                alex_grey_inspired: true,
                ernst_fuchs_precision: true,
                hr_giger_technical: true
            },
            trauma_informed: {
                no_autoplay: true,
                no_flashing: true,
                generous_whitespace: true,
                calm_contrast: true,
                optional_motion: true
            },
            mathematics: {
                sacred_numbers: [144, 99, 33, 7],
                fibonacci_applied: true,
                golden_ratio_layout: true,
                divine_proportions: true
            }
        };

        // Update description if not already sacred
        if (!packageJson.description.includes('🏛️') && !packageJson.description.includes('sacred')) {
            packageJson.description = `🏛️ ${packageJson.description} (Sacred Geometry Enhanced)`;
        }

        // Add sacred keywords
        const sacredKeywords = [
            'sacred-geometry',
            'golden-ratio',
            'fibonacci',
            'visionary-art',
            'trauma-informed',
            'mystical-computing'
        ];

        if (packageJson.keywords) {
            packageJson.keywords = [...new Set([...packageJson.keywords, ...sacredKeywords])];
        } else {
            packageJson.keywords = sacredKeywords;
        }

        fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
    }

    // Create sacred issue templates
    async createSacredIssueTemplates(repoPath) {
        const templatesDir = path.join(repoPath, '.github', 'ISSUE_TEMPLATE');

        if (!fs.existsSync(templatesDir)) {
            fs.mkdirSync(templatesDir, { recursive: true });
        }

        const sacredTemplate = this.sacredIntegration.generateSacredIssueTemplates();
        const templatePath = path.join(templatesDir, 'sacred-geometry-enhancement.md');

        fs.writeFileSync(templatePath, sacredTemplate.body);
    }

    // Update README with sacred geometry principles
    async updateReadmeWithSacredPrinciples(repoPath, repositoryName) {
        const readmePath = path.join(repoPath, 'README.md');

        if (!fs.existsSync(readmePath)) {
            return; // Skip if no README
        }

        let readmeContent = fs.readFileSync(readmePath, 'utf8');

        // Add sacred geometry section if not present
        if (!readmeContent.includes('Sacred Geometry') && !readmeContent.includes('sacred geometry')) {
            const sacredSection = `

## 🔮 Sacred Geometry Foundation

This repository implements authentic sacred geometry principles:

### Mathematical Foundations
- **Golden Ratio (φ)**: ${(1 + Math.sqrt(5)) / 2} - Divine proportions in all layouts
- **Fibonacci Sequence**: ${[0, 1, 1, 2, 3, 5, 8, 13, 21, 34].join(', ')} - Sacred numbering systems
- **Platonic Solids**: Tetrahedron, Cube, Octahedron, Dodecahedron, Icosahedron - 3D sacred forms

### Visionary Art Principles
- **Alex Grey** color progressions - Physical → Subtle → Causal consciousness mapping
- **Ernst Fuchs** precision - Flemish master mathematical accuracy
- **HR Giger** biomechanical - Technical precision and organic forms

### Trauma-Informed Sacred Technology
- **No autoplay** or sudden movements
- **Generous whitespace** following golden ratio
- **Calm contrast** using visionary art palettes
- **Optional motion** with 14+ second minimum sweeps
- **Pure functions** for auditable, reversible operations

### Sacred Architecture Numbers
- **144**: Sacred nodes in the Codex system
- **99**: Fusion gates of mystical alignment
- **33**: Chapters of living narrative spine
- **7**: Egregores of archetypal guardianship

---

*🏛️ Built with authentic sacred mathematics and visionary art wisdom*`;

            readmeContent += sacredSection;
            fs.writeFileSync(readmePath, readmeContent);
        }
    }

    // Generate GitHub CLI commands for repository setup
    generateGitHubCommands() {
        console.log('');
        console.log('🚀 GitHub CLI Commands for Sacred Setup:');
        console.log('=====================================');
        console.log('');

        this.repositories.forEach(repo => {
            console.log(`# ${repo}`);
            console.log(`gh repo edit ${repo} --description "${this.sacredIntegration.getSacredDescription(repo)}"`);
            console.log(`gh repo edit ${repo} --add-topic sacred-geometry,golden-ratio,fibonacci`);
            console.log(`gh label create sacred-geometry --color "#8e44ad" --description "Sacred geometry implementation"`);

            // Fibonacci priority labels
            [8, 13, 21, 34].forEach(num => {
                const color = this.sacredIntegration.fibonacciToColor(num);
                console.log(`gh label create "priority-fibonacci-${num}" --color "${color}" --description "Priority ${num}"`);
            });

            console.log('');
        });
    }

    // Create sacred milestone structure
    createSacredMilestones() {
        console.log('');
        console.log('📅 Sacred Milestones (Fibonacci-based):');
        console.log('=====================================');

        const milestones = this.sacredIntegration.generateSacredMilestones();

        milestones.forEach(milestone => {
            console.log(`📆 ${milestone.title}`);
            console.log(`   📝 ${milestone.description}`);
            console.log(`   ⏰ Due: ${milestone.due_date}`);
            console.log(`   🔢 Fibonacci: ${milestone.fibonacci_value}`);
            console.log(`   💫 Sacred: ${milestone.sacred_significance}`);
            console.log('');
        });
    }
}

// Execute if run directly
if (require.main === module) {
    const updater = new SacredGitHubUpdater();
    updater.updateAllRepositories().then(() => {
        updater.generateGitHubCommands();
        updater.createSacredMilestones();
        console.log('🏛️ Sacred GitHub integration complete!');
    }).catch(error => {
        console.error('❌ Error during sacred update:', error);
        process.exit(1);
    });
}

module.exports = { SacredGitHubUpdater };
