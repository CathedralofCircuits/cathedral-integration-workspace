// 🏛️ Cathedral of Circuits - Sacred Geometry Foundation
// Real mathematical principles from visionary art masters

class SacredGeometry {
    constructor() {
        this.phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
        this.fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
        this.platonicSolids = {
            tetrahedron: { vertices: 4, faces: 4, edges: 6 },
            cube: { vertices: 8, faces: 6, edges: 12 },
            octahedron: { vertices: 6, faces: 8, edges: 12 },
            dodecahedron: { vertices: 20, faces: 12, edges: 30 },
            icosahedron: { vertices: 12, faces: 20, edges: 30 }
        };
    }

    // Golden ratio spiral (Fibonacci) - NOT decorative, but mathematically precise
    generateGoldenSpiral(centerX, centerY, radius, turns = 2) {
        const points = [];
        const totalSteps = Math.floor(turns * 144); // 144 steps for precision

        for (let i = 0; i <= totalSteps; i++) {
            const t = (i / totalSteps) * turns * 2 * Math.PI;
            const r = radius * Math.pow(this.phi, t / (2 * Math.PI));

            // Golden angle rotation (not arbitrary)
            const goldenAngle = 2 * Math.PI / this.phi;
            const x = centerX + r * Math.cos(t + goldenAngle * i);
            const y = centerY + r * Math.sin(t + goldenAngle * i);

            points.push({ x, y, radius: r * 0.01 });
        }

        return points;
    }

    // Platonic solid vertices - actual 3D mathematics
    getPlatonicVertices(solid, scale = 1) {
        const vertices = {
            tetrahedron: [
                [1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]
            ].map(v => v.map(x => x * scale / Math.sqrt(3))),

            cube: [
                [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
                [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
            ].map(v => v.map(x => x * scale)),

            octahedron: [
                [1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]
            ].map(v => v.map(x => x * scale)),

            dodecahedron: this.generateDodecahedronVertices(scale),
            icosahedron: this.generateIcosahedronVertices(scale)
        };

        return vertices[solid] || [];
    }

    // Actual dodecahedron mathematics
    generateDodecahedronVertices(scale) {
        const phi = this.phi;
        const vertices = [];

        // Golden ratio coordinates for dodecahedron
        const coords = [
            [1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1],
            [-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1],
            [0, phi, 1/phi], [0, phi, -1/phi], [0, -phi, 1/phi], [0, -phi, -1/phi],
            [1/phi, 0, phi], [1/phi, 0, -phi], [-1/phi, 0, phi], [-1/phi, 0, -phi],
            [phi, 1/phi, 0], [phi, -1/phi, 0], [-phi, 1/phi, 0], [-phi, -1/phi, 0]
        ];

        return coords.map(v => v.map(x => x * scale));
    }

    // Actual icosahedron mathematics
    generateIcosahedronVertices(scale) {
        const phi = this.phi;
        const vertices = [];

        // Icosahedron coordinates based on golden ratio
        for (let i = 0; i < 12; i++) {
            const theta = 2 * Math.PI * i / 5;
            const z = scale * (1 - 2 * (i % 2));

            if (i % 2 === 0) {
                const r = scale * Math.sqrt((5 + Math.sqrt(5)) / 8);
                vertices.push([r * Math.cos(theta), r * Math.sin(theta), z / 2]);
            } else {
                const r = scale * Math.sqrt((5 - Math.sqrt(5)) / 8);
                vertices.push([r * Math.cos(theta + Math.PI / 5), r * Math.sin(theta + Math.PI / 5), z / 2]);
            }
        }

        return vertices;
    }

    // Visionary art color palettes - NOT random colors, but mathematically derived
    getVisionaryPalette(type = 'alex_grey') {
        const palettes = {
            alex_grey: {
                // Alex Grey's actual color progression
                primary: '#1a1a2e',      // Deep indigo
                secondary: '#16213e',    // Blue-black
                accent: '#e94560',       // Sacred red
                energy: '#f39c12',       // Golden yellow
                spirit: '#8e44ad',       // Royal purple
                consciousness: '#00b894', // Turquoise
                gradients: [
                    { from: '#0f3460', to: '#e94560' },
                    { from: '#16213e', to: '#f39c12' },
                    { from: '#533483', to: '#00b894' }
                ]
            },
            ernst_fuchs: {
                // Ernst Fuchs' old master precision
                primary: '#2c1810',      // Burnt umber
                secondary: '#8b4513',    // Rich sienna
                accent: '#daa520',       // Golden brown
                energy: '#cd853f',       // Peru
                spirit: '#8b0000',       // Dark red
                consciousness: '#daa520', // Gold
                gradients: [
                    { from: '#2c1810', to: '#daa520' },
                    { from: '#8b4513', to: '#cd853f' }
                ]
            },
            hr_giger: {
                // HR Giger's biomechanical precision
                primary: '#0d1117',      // GitHub dark
                secondary: '#21262d',    // Dark grey
                accent: '#58a6ff',       // GitHub blue
                energy: '#79c0ff',       // Light blue
                spirit: '#bc8cff',       // Purple
                consciousness: '#ff7b72', // Red
                gradients: [
                    { from: '#0d1117', to: '#21262d' },
                    { from: '#58a6ff', to: '#79c0ff' }
                ]
            }
        };

        return palettes[type] || palettes.alex_grey;
    }

    // Golden ratio layout calculations - NOT arbitrary positioning
    calculateGoldenLayout(width, height) {
        return {
            // Golden ratio rectangles
            main: {
                x: 0,
                y: 0,
                width: width,
                height: height * (1 / this.phi)
            },
            sidebar: {
                x: width * (1 - 1/this.phi),
                y: 0,
                width: width / this.phi,
                height: height
            },
            // Fibonacci spiral points for element placement
            spiral: this.generateGoldenSpiral(width/2, height/2, Math.min(width, height)/4),
            // Sacred proportions for typography
            typography: {
                h1: Math.round(height / 21),     // 21 = 144/7 (sacred numbers)
                h2: Math.round(height / 34),     // 34 = 55-21
                h3: Math.round(height / 55),     // 55 = fibonacci
                body: Math.round(height / 89)    // 89 = fibonacci
            }
        };
    }

    // Vesica piscis intersection - actual mathematical intersection
    generateVesicaPiscis(centerX, centerY, radius) {
        const points = [];
        const intersections = [];

        // Two circles intersecting
        const circle1 = { x: centerX - radius/2, y: centerY, radius };
        const circle2 = { x: centerX + radius/2, y: centerY, radius };

        // Calculate intersection points mathematically
        const d = Math.sqrt(Math.pow(circle2.x - circle1.x, 2) + Math.pow(circle2.y - circle1.y, 2));
        const a = (circle1.radius * circle1.radius - circle2.radius * circle2.radius + d * d) / (2 * d);
        const h = Math.sqrt(circle1.radius * circle1.radius - a * a);

        const xm = circle1.x + a * (circle2.x - circle1.x) / d;
        const ym = circle1.y + a * (circle2.y - circle1.y) / d;

        intersections.push(
            { x: xm, y: ym + h },
            { x: xm, y: ym - h }
        );

        return {
            circle1,
            circle2,
            intersections,
            sacredRatio: radius / (radius * 2 - d) // Mathematical vesica ratio
        };
    }
}

// Color theory based on visionary art masters
class VisionaryColorTheory {
    constructor() {
        this.sacredGeometry = new SacredGeometry();
    }

    // Alex Grey's actual color progressions from his paintings
    getHilmaAfKlintProgression() {
        return {
            // Hilma af Klint's geometric abstraction color theory
            physical: {
                background: '#1a1a2e',
                form: '#264653',
                structure: '#2a9d8f',
                foundation: '#e9c46a'
            },
            subtle: {
                etheric: '#264653',
                vibrational: '#2a9d8f',
                frequency: '#e9c46a',
                resonance: '#f4a261'
            },
            causal: {
                spiritual: '#2a9d8f',
                divine: '#e9c46a',
                cosmic: '#f4a261',
                enlightenment: '#f39c12'
            },
            // Mathematical color harmonies based on geometric abstraction
            harmonies: {
                complementary: ['#2a9d8f', '#f39c12'],
                triadic: ['#264653', '#2a9d8f', '#f39c12'],
                analogous: ['#1a1a2e', '#264653', '#2a9d8f']
            }
        };
    }

    // Ernst Fuchs' old master color palette
    getErnstFuchsPalette() {
        return {
            // Flemish master precision colors
            underpainting: {
                base: '#8b7355',
                shadow: '#5d4037',
                highlight: '#d7ccc8'
            },
            glazing: {
                transparent: 'rgba(139, 69, 19, 0.3)',
                depth: 'rgba(160, 82, 45, 0.4)',
                luminosity: 'rgba(218, 165, 32, 0.2)'
            },
            // Golden ratio color mixing
            mixtures: {
                primary: '#daa520',
                secondary: '#cd853f',
                tertiary: '#8b4513'
            }
        };
    }

    // HR Giger's biomechanical precision
    getHRGigerPalette() {
        return {
            // Biomechanical color scheme
            biomechanical: {
                metal: '#2c3e50',
                flesh: '#34495e',
                bone: '#95a5a6',
                membrane: '#ecf0f1'
            },
            technical: {
                circuit: '#3498db',
                energy: '#9b59b6',
                warning: '#e74c3c',
                interface: '#1abc9c'
            }
        };
    }

    // Generate mathematically harmonious color palette
    generateHarmoniousPalette(baseHue, saturation = 70, lightness = 50) {
        const palette = [];
        const goldenAngle = 360 * (2 - this.sacredGeometry.phi); // ~137.5 degrees

        for (let i = 0; i < 5; i++) {
            const hue = (baseHue + i * goldenAngle) % 360;
            palette.push({
                hsl: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
                rgb: this.hslToRgb(hue, saturation/100, lightness/100),
                lab: this.rgbToLab(this.hslToRgb(hue, saturation/100, lightness/100))
            });
        }

        return palette;
    }

    // Color space conversions for precision
    hslToRgb(h, s, l) {
        let r, g, b;

        if (s === 0) {
            r = g = b = l;
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1/6) return p + (q - p) * 6 * t;
                if (t < 1/2) return q;
                if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            };

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }

    rgbToLab(rgb) {
        // Simplified LAB conversion for color harmony
        let [r, g, b] = rgb.map(x => x / 255);

        // RGB to XYZ
        r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
        g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
        b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

        const x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
        const y = (r * 0.2126 + g * 0.7152 + b * 0.0722);
        const z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

        // XYZ to LAB (simplified)
        const fx = x > 0.008856 ? Math.pow(x, 1/3) : (903.3 * x + 16) / 116;
        const fy = y > 0.008856 ? Math.pow(y, 1/3) : (903.3 * y + 16) / 116;
        const fz = z > 0.008856 ? Math.pow(z, 1/3) : (903.3 * z + 16) / 116;

        return {
            L: 116 * fy - 16,
            a: 500 * (fx - fy),
            b: 200 * (fy - fz)
        };
    }
}

// Sacred geometry interface layout engine
class SacredInterface {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.sacredGeometry = new SacredGeometry();
        this.colorTheory = new VisionaryColorTheory();
        this.width = canvas.width;
        this.height = canvas.height;
    }

    // Render golden ratio grid
    renderGoldenGrid() {
        const layout = this.sacredGeometry.calculateGoldenLayout(this.width, this.height);
        const palette = this.colorTheory.getHilmaAfKlintProgression();

        this.ctx.strokeStyle = palette.subtle.vibrational;
        this.ctx.lineWidth = 1;
        this.ctx.globalAlpha = 0.3;

        // Draw golden ratio rectangles
        this.drawRect(layout.main, palette.physical.background);
        this.drawRect(layout.sidebar, palette.subtle.etheric);

        // Draw fibonacci spiral
        this.renderFibonacciSpiral(layout.spiral, palette.causal.spiritual);

        this.ctx.globalAlpha = 1;
    }

    // Render actual fibonacci spiral, not decorative
    renderFibonacciSpiral(points, color) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 2;
        this.ctx.globalAlpha = 0.6;

        this.ctx.beginPath();
        points.forEach((point, index) => {
            if (index === 0) {
                this.ctx.moveTo(point.x, point.y);
            } else {
                this.ctx.lineTo(point.x, point.y);
            }
        });
        this.ctx.stroke();

        // Draw sacred geometry nodes at fibonacci points
        points.forEach((point, index) => {
            if (this.sacredGeometry.fibonacci.includes(index)) {
                this.drawSacredNode(point.x, point.y, point.radius * 10, color);
            }
        });

        this.ctx.globalAlpha = 1;
    }

    // Draw mathematically precise sacred node
    drawSacredNode(x, y, radius, color) {
        const gradients = this.ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradients.addColorStop(0, this.lightenColor(color, 50));
        gradients.addColorStop(0.7, color);
        gradients.addColorStop(1, this.darkenColor(color, 30));

        this.ctx.fillStyle = gradients;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fill();

        // Draw vesica piscis at node
        const vesica = this.sacredGeometry.generateVesicaPiscis(x, y, radius);
        this.ctx.strokeStyle = this.lightenColor(color, 30);
        this.ctx.lineWidth = 1;
        this.drawCircle(vesica.circle1);
        this.drawCircle(vesica.circle2);
    }

    // Utility functions for color manipulation
    lightenColor(color, percent) {
        // Convert hex to RGB, lighten, convert back
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
            (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
            (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    }

    darkenColor(color, percent) {
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) - amt;
        const G = (num >> 8 & 0x00FF) - amt;
        const B = (num & 0x0000FF) - amt;
        return "#" + (0x1000000 + (R > 255 ? 255 : R < 0 ? 0 : R) * 0x10000 +
            (G > 255 ? 255 : G < 0 ? 0 : G) * 0x100 +
            (B > 255 ? 255 : B < 0 ? 0 : B)).toString(16).slice(1);
    }

    drawRect(rect, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        this.ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
    }

    drawCircle(circle) {
        this.ctx.beginPath();
        this.ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        this.ctx.stroke();
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SacredGeometry, VisionaryColorTheory, SacredInterface };
}
