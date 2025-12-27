// --- CONFIGURACIÓN Y CONSTANTES ---

// Leer credenciales desde el archivo config.js inyectado
const SUPABASE_URL = window.env?.SUPABASE_URL || '';
const SUPABASE_KEY = window.env?.SUPABASE_KEY || '';

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error("Faltan las credenciales de Supabase. Asegúrate de que config.js se haya cargado.");
}

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const MAP_PATHS = {
    MX: "M100,50 L160,60 L180,90 L160,120 L130,110 L110,90 Z",
    GT: "M160,120 L175,125 L170,135 L160,130 Z",
    SV: "M170,135 L180,135 L175,140 Z",
    HN: "M175,125 L200,125 L195,135 L175,135 Z",
    NI: "M195,135 L210,140 L205,150 L190,140 Z",
    CR: "M205,150 L220,160 L215,165 L200,155 Z",
    PA: "M220,160 L250,165 L245,170 L215,165 Z",
    CU: "M220,80 Q250,60 280,90 Q250,110 220,80",
    JM: "M230,100 A10,10 0 1,0 250,100 A10,10 0 1,0 230,100",
    HT: "M260,95 L275,95 L275,110 L260,110 Z",
    DO: "M275,95 L295,100 L290,115 L275,110 Z",
    TT: "M320,135 A8,8 0 1,0 336,135 A8,8 0 1,0 320,135",
    CO: "M245,170 L280,170 L280,210 L240,200 Z",
    VE: "M280,170 L330,175 L320,200 L280,210 Z",
    EC: "M230,200 L250,200 L250,220 L230,215 Z",
    PE: "M250,220 L280,220 L290,280 L260,300 L240,250 Z",
    BR: "M330,175 L400,200 L420,300 L350,350 L320,300 L290,280 L280,210 L320,200 Z",
    BO: "M290,280 L320,300 L320,330 L290,320 Z",
    PY: "M320,300 L350,310 L340,350 L320,330 Z",
    CL: "M260,300 L290,320 L280,450 L260,430 Z",
    AR: "M290,320 L320,330 L340,350 L330,380 L300,460 L280,450 Z",
    UY: "M340,350 L360,355 L355,375 L330,365 Z"
};

const MAP_COORDS = {
    MX: {x:130, y:80}, GT: {x:160, y:120}, SV: {x:170, y:145}, HN: {x:190, y:120},
    NI: {x:200, y:145}, CR: {x:205, y:165}, PA: {x:240, y:175}, CU: {x:250, y:85},
    JM: {x:240, y:115}, HT: {x:265, y:95}, DO: {x:290, y:90}, TT: {x:345, y:135},
    CO: {x:260, y:190}, VE: {x:300, y:180}, EC: {x:220, y:210}, PE: {x:250, y:260},
    BR: {x:360, y:250}, BO: {x:300, y:300}, PY: {x:335, y:325}, CL: {x:255, y:380},
    AR: {x:310, y:400}, UY: {x:365, y:365}
};

const COUNTRIES_LIST = [
    { id: 'AR', name: 'Argentina', flagCode: 'ar', region: 'South America' },
    { id: 'BO', name: 'Bolivia', flagCode: 'bo', region: 'South America' },
    { id: 'BR', name: 'Brasil', flagCode: 'br', region: 'South America' },
    { id: 'CL', name: 'Chile', flagCode: 'cl', region: 'South America' },
    { id: 'CO', name: 'Colombia', flagCode: 'co', region: 'South America' },
    { id: 'CR', name: 'Costa Rica', flagCode: 'cr', region: 'Central America' },
    { id: 'CU', name: 'Cuba', flagCode: 'cu', region: 'Caribbean' },
    { id: 'EC', name: 'Ecuador', flagCode: 'ec', region: 'South America' },
    { id: 'SV', name: 'El Salvador', flagCode: 'sv', region: 'Central America' },
    { id: 'GT', name: 'Guatemala', flagCode: 'gt', region: 'Central America' },
    { id: 'HT', name: 'Haití', flagCode: 'ht', region: 'Caribbean' },
    { id: 'HN', name: 'Honduras', flagCode: 'hn', region: 'Central America' },
    { id: 'JM', name: 'Jamaica', flagCode: 'jm', region: 'Caribbean' },
    { id: 'MX', name: 'México', flagCode: 'mx', region: 'North America' },
    { id: 'NI', name: 'Nicaragua', flagCode: 'ni', region: 'Central America' },
    { id: 'PA', name: 'Panamá', flagCode: 'pa', region: 'Central America' },
    { id: 'PY', name: 'Paraguay', flagCode: 'py', region: 'South America' },
    { id: 'PE', name: 'Perú', flagCode: 'pe', region: 'South America' },
    { id: 'DO', name: 'República Dominicana', flagCode: 'do', region: 'Caribbean' },
    { id: 'TT', name: 'Trinidad y Tobago', flagCode: 'tt', region: 'Caribbean' },
    { id: 'UY', name: 'Uruguay', flagCode: 'uy', region: 'South America' },
    { id: 'VE', name: 'Venezuela', flagCode: 've', region: 'South America' },
];

const CATEGORIES = [
    { id: 1, name: 'Autoridades y marco general', icon: 'scale' },
    { id: 2, name: 'Rol y obligaciones del patrocinador', icon: 'briefcase' },
    { id: 3, name: 'Autorización inicial del ensayo clínico', icon: 'file-check' },
    { id: 4, name: 'Gestión del producto en investigación', icon: 'flask-conical' },
    { id: 5, name: 'Conducción y cierre del ensayo', icon: 'activity' },
    { id: 6, name: 'Regulaciones específicas adicionales', icon: 'scroll' },
    { id: 7, name: 'Recursos prácticos', icon: 'link' }
];

const QUESTIONS = {
    '1.1': '¿Cuál es la principal Autoridad Reguladora Nacional (ARN) para ensayos clínicos?',
    '1.2': '¿Cuáles son las normativas principales que rigen la investigación en salud?',
    '1.3': '¿Cuáles son las normativas principales que rigen la autorización de ensayos clínicos?',
    '1.4': '¿Se requiere la aprobación de un Comité de Ética en Investigación (CEI)?',
    '1.5': '¿La aprobación de un Comité de Ética en Investigación (CEI) debe ser previa a la presentación frente a la Autoridad Regulatoria?',
    '1.6': '¿Existe un registro nacional o sistema de acreditación para los CEI?',
    '1.7': '¿Se establece qué tipo de investigaciones deben ser autorizadas previamente al inicio por la autoridad regulatoria?',
    '2.1': '¿La normativa define al patrocinador de un ensayo clínico?',
    '2.2': '¿Se requiere que el patrocinador tenga un representante legal o una entidad jurídica domiciliada en el país?',
    '2.3': '¿Se establecen los requisitos que debe cumplir el patrocinador para poder actuar como tal?',
    '2.4': '¿Se establecen los requisitos que debe cumplir el patrocinador si se actúa a través de una Organización de Investigación por Contrato (OIC / CRO)?',
    '2.5': '¿Existen requisitos específicos para la selección de sitios o investigadores?',
    '2.6': '¿Se establecen requisitos sobre seguros y compensación para los participantes?',
    '3.1': '¿Se establece cuál es el contenido esencial del envío para la autorización inicial?',
    '3.2': '¿Se establece cómo es el proceso de envío (plataforma, formato)?',
    '3.3': '¿Se definen cuáles son los plazos regulatorios oficiales para la cronología de la revisión?',
    '3.4': '¿Se deben pagar tasas (aranceles) por la evaluación del ensayo?',
    '3.5': '¿Es obligatorio el registro público del ensayo clínico antes de su inicio?',
    '3.6': '¿Existen mecanismos de reconocimiento de evaluaciones o acreditaciones realizadas por autoridades regulatorias o éticas fuera del país?',
    '3.7': '¿Cuál es el orden secuencial de pasos que deben cumplir el patrocinador, la institución y el investigador principal desde el principio del proceso hasta la autorización para el inicio del estudio?',
    '4.1': '¿Se establecen requisitos de etiquetado para el PI?',
    '4.2': '¿Se requiere prueba de Buenas Prácticas de Manufactura (BPM/GMP) para el PI?',
    '4.3': '¿La aprobación del ensayo incluye la autorización para importar/usar el PI?',
    '5.1': 'Informes de Seguridad: ¿Se establecen cuáles son los requisitos, canales, mecanismos y plazos para notificar EAS y RASI/SUSARs?',
    '5.2': '¿Se requiere la presentación de informes anuales de seguridad?',
    '5.3': '¿Se requiere la presentación de informes de seguimiento periódicos?',
    '5.4': '¿Se establece qué tipo de enmiendas al protocolo requieren aprobación previa de la ARN y/o del CEI?',
    '5.5': '¿Existen obligaciones sobre el acceso post-estudio al tratamiento en investigación?',
    '6.1': '¿Existe una ley de protección de datos personales aplicable a los ensayos clínicos?',
    '6.2': '¿Existen normativas o guías específicas para ensayos clínicos con vacunas?',
    '6.3': '¿Existen normativas o guías específicas para la recolección y/o utilización de muestras para investigación?',
    '6.4': 'Ensayos clínicos para situaciones especiales: ¿Existen normativas o guías específicas para otro tipo de ensayos clínicos?'
};

const NO_BOOLEAN_QUESTIONS = ['1.1', '1.2', '1.3', '3.7'];

const RESOURCE_SUBTITLES = {
    '7.1': { title: 'Normativas Clave de Referencia Rápida', icon: 'scroll-text' },
    '7.2': { title: 'Formularios Oficiales', icon: 'file-text' },
    '7.3': { title: 'Guías, Instructivos Oficiales y Web', icon: 'book-open' }
};

// --- APLICACIÓN PRINCIPAL (OBJETO GLOBAL) ---

const app = {
    state: {
        view: 'home', 
        selectedCountry: null,
        searchTerm: '',
        comparisonResults: null,
        filteredCountries: null,
        filterCriteria: []
    },

    init: function() {
        this.render();
        this.setupGlobalEvents();
    },

    // Navegación
    setView: function(viewName) {
        this.state.view = viewName;
        if (viewName !== 'country') this.state.selectedCountry = null;
        if (viewName === 'home') {
             this.state.searchTerm = '';
             this.state.filteredCountries = null;
        }
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    goHome: function() {
        this.setView('home');
    },

    selectCountry: function(countryName) {
        this.state.selectedCountry = countryName;
        this.setView('country');
    },

    // UTILIDAD: Linkificación inteligente (Solo para el campo Fuente)
    linkifyText: function(text, links) {
        if (!text || !links || links.length === 0) return text;

        const sortedLinks = [...links].sort((a, b) => {
            const titleA = a.titulo || '';
            const titleB = b.titulo || '';
            return titleB.length - titleA.length;
        });

        let linkedText = text;

        sortedLinks.forEach(link => {
            if (link.titulo && link.enlace) {
                const escapedTitle = link.titulo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regex = new RegExp(escapedTitle, 'gi');

                linkedText = linkedText.replace(regex, (match) => {
                    return `<a href="${link.enlace}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline font-semibold hover:text-blue-800" title="Ver normativa oficial">${match}</a>`;
                });
            }
        });

        return linkedText;
    },

    // --- RENDERIZADORES ---

    render: function() {
        const container = document.getElementById('app-container');
        const navButtons = document.querySelectorAll('nav button');
        
        navButtons.forEach(btn => {
            btn.classList.remove('bg-blue-50', 'text-blue-700', 'ring-1', 'ring-blue-200');
            btn.classList.add('text-slate-500');
        });
        const activeBtn = document.getElementById(`nav-${this.state.view}`);
        if(activeBtn) {
            activeBtn.classList.remove('text-slate-500');
            activeBtn.classList.add('bg-blue-50', 'text-blue-700', 'ring-1', 'ring-blue-200');
        }

        switch(this.state.view) {
            case 'home':
                this.renderHome(container);
                break;
            case 'country':
                this.renderCountryDetail(container);
                break;
            case 'compare':
                this.renderComparisonTool(container);
                break;
            case 'filter':
                this.renderFilterTool(container);
                break;
        }
        
        lucide.createIcons();
    },

    // VISTA: HOME
    renderHome: function(container) {
        let mapPathsHtml = '';
        for (const [id, pathData] of Object.entries(MAP_PATHS)) {
            const country = COUNTRIES_LIST.find(c => c.id === id);
            const coords = MAP_COORDS[id];
            if (country && coords) {
                mapPathsHtml += `
                <g class="group cursor-pointer" onclick="app.selectCountry('${country.name}')">
                    <path d="${pathData}" fill="#f8fafc" stroke="#94a3b8" stroke-width="1" class="map-path hover:fill-blue-500 hover:stroke-blue-700"></path>
                    <g class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <rect x="${coords.x - (country.name.length * 3.5)}" y="${coords.y - 20}" width="${country.name.length * 7 + 10}" height="20" rx="4" fill="rgba(15, 23, 42, 0.9)"></rect>
                        <text x="${coords.x}" y="${coords.y - 6}" text-anchor="middle" fill="white" font-size="10" font-weight="bold">${country.name}</text>
                    </g>
                </g>`;
            }
        }

        const inputExists = document.getElementById('home-search-input');
        
        if (!inputExists) {
            container.innerHTML = `
            <div class="animate-in fade-in duration-500">
                <div class="text-center mb-10 max-w-3xl mx-auto">
                    <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Información Regulatoria para Ensayos Clínicos en <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">América Latina y el Caribe</span>
                    </h1>
                    
                    <div class="max-w-md mx-auto relative group z-20">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i data-lucide="search" class="h-5 w-5 text-slate-400"></i>
                        </div>
                        <input 
                            type="text" 
                            id="home-search-input"
                            class="block w-full pl-10 pr-4 py-3 border border-slate-200 rounded-full bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all shadow-sm hover:shadow-md"
                            placeholder="Buscar país (ej. Argentina, México)..."
                            value="${this.state.searchTerm}"
                            autocomplete="off"
                        >
                        <div id="search-results-dropdown" class="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-30 hidden">
                        </div>
                    </div>
                </div>

                <div class="mb-12">
                    <div class="relative w-full max-w-2xl mx-auto h-[500px] md:h-[600px] bg-blue-50/50 rounded-3xl border border-blue-100 shadow-inner overflow-hidden flex items-center justify-center p-4">
                        <svg viewBox="0 0 500 500" class="w-full h-full drop-shadow-xl">
                            ${mapPathsHtml}
                        </svg>
                    </div>
                </div>
            </div>`;

            const input = document.getElementById('home-search-input');
            input.addEventListener('input', (e) => {
                this.state.searchTerm = e.target.value;
                this.updateSearchResults();
            });
        }
        
        this.updateSearchResults();
    },

    updateSearchResults: function() {
        const dropdown = document.getElementById('search-results-dropdown');
        if (!dropdown) return;

        const term = this.state.searchTerm.toLowerCase();
        
        if (!term) {
            dropdown.classList.add('hidden');
            dropdown.innerHTML = '';
            return;
        }

        const results = COUNTRIES_LIST.filter(c => c.name.toLowerCase().includes(term));
        dropdown.classList.remove('hidden');

        if (results.length > 0) {
            dropdown.innerHTML = results.map(c => `
                <button onclick="app.selectCountry('${c.name}')" class="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center gap-3 border-b border-slate-50 last:border-0">
                    <span class="fi fi-${c.flagCode} shadow-sm rounded-sm"></span>
                    <span class="font-medium text-slate-700">${c.name}</span>
                </button>
            `).join('');
        } else {
            dropdown.innerHTML = '<div class="p-4 text-slate-400 text-sm text-center">No se encontraron resultados</div>';
        }
    },

    // VISTA: DETALLE PAÍS
    renderCountryDetail: async function(container) {
        const countryName = this.state.selectedCountry;
        
        container.innerHTML = `
            <div class="flex justify-center items-center h-96">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>`;

        try {
            // USAR TABLA faq_rows_corregido
            const [faqRes, summaryRes, linksRes] = await Promise.all([
                supabase.from('faq_rows_corregido').select('*').eq('pais', countryName).limit(1).single(),
                supabase.from('resumen_ejecutivo').select('*').eq('pais', countryName).single(),
                supabase.from('enlaces').select('*').eq('pais', countryName).order('question_code')
            ]);

            const faq = faqRes.data;
            const summary = summaryRes.data;
            const links = linksRes.data || [];

            if (!faq || !summary) {
                container.innerHTML = '<div class="text-center p-10 text-red-500">Datos no disponibles para este país.</div>';
                return;
            }

            const countryData = COUNTRIES_LIST.find(c => c.name === countryName);
            const flagCode = countryData ? countryData.flagCode : 'xx';

            // Generar HTML de Preguntas
            let questionsHtml = '';
            CATEGORIES.forEach(cat => {
                questionsHtml += `
                <div id="cat-${cat.id}" class="scroll-mt-24 mb-12">
                    <h3 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3 pb-2 border-b border-slate-200">
                        <i data-lucide="${cat.id === 7 ? 'link' : 'file-check'}" class="w-6 h-6 text-blue-600"></i>
                        ${cat.name}
                    </h3>`;

                if (cat.id === 7) {
                    // SECCIÓN 7: RECURSOS
                    if (links.length === 0) {
                        questionsHtml += `<div class="text-slate-500 italic p-4 bg-slate-50 rounded-lg">No hay recursos disponibles.</div>`;
                    } else {
                        questionsHtml += `<div class="space-y-8">`;
                        ['7.1', '7.2', '7.3'].forEach(subCode => {
                            const subLinks = links.filter(l => l.question_code === subCode);
                            const htmlId = `question-${subCode.replace(/\./g, '-')}`;

                            if (subLinks.length > 0) {
                                const info = RESOURCE_SUBTITLES[subCode];
                                questionsHtml += `
                                <div id="${htmlId}" class="scroll-mt-28">
                                    <h4 class="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                                        <i data-lucide="${info.icon}" class="w-5 h-5 text-teal-600"></i>
                                        ${info.title}
                                    </h4>
                                    <div class="grid grid-cols-1 gap-4">
                                        ${subLinks.map(link => `
                                            <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                                                <h5 class="font-bold text-blue-700 mb-2">${link.titulo}</h5>
                                                <p class="text-sm text-slate-600 mb-4">${link.proposito_descripcion || ''}</p>
                                                <a href="${link.enlace}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                                                    Acceder al Recurso <i data-lucide="external-link" class="w-3 h-3"></i>
                                                </a>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>`;
                            }
                        });
                        questionsHtml += `</div>`;
                    }
                } else {
                    // SECCIONES PREGUNTAS
                    questionsHtml += `<div class="space-y-6">`;
                    Object.entries(QUESTIONS)
                        .filter(([key]) => key.startsWith(`${cat.id}.`))
                        .map(([qId, qText]) => {
                            const dbKey = `q_${qId.replace(/\./g, '_')}`;
                            const htmlId = `question-${qId.replace(/\./g, '-')}`;
                            
                            // TEXTOS ORIGINALES (Sin procesar para Directa y Ampliada)
                            const directAnswer = faq[`${dbKey}_directa`];
                            const extendedAnswer = faq[`${dbKey}_ampliada`];
                            
                            // PROCESAMIENTO SOLO PARA LA FUENTE
                            const rawSource = faq[`${dbKey}_fuente`];
                            const cleanSource = rawSource ? this.linkifyText(rawSource, links) : '';

                            questionsHtml += `
                            <div id="${htmlId}" class="bg-white rounded-xl border border-slate-200 shadow-sm p-6 scroll-mt-28">
                                <h4 class="font-bold text-slate-800 text-lg mb-4">${qId} - ${qText}</h4>
                                <div class="mb-4 text-sm text-slate-800 font-medium bg-blue-50/50 p-4 rounded-lg border-l-4 border-blue-500">
                                    ${directAnswer || "Información no disponible"}
                                </div>
                                ${extendedAnswer ? `<div class="mb-4 text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">${extendedAnswer}</div>` : ''}
                                ${cleanSource ? `
                                    <div class="mt-4 pt-4 border-t border-slate-100">
                                        <button onclick="app.toggleSource('source-${qId.replace(/\./g, '-')}')" class="text-xs font-bold text-slate-500 hover:text-blue-600 flex items-center gap-2 transition-colors">
                                            <i data-lucide="book-open" class="w-3 h-3"></i> Ver Fuente
                                        </button>
                                        <div id="source-${qId.replace(/\./g, '-')}" class="hidden mt-3 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-500 font-mono whitespace-pre-wrap animate-in fade-in duration-200">${cleanSource}</div>
                                    </div>` : ''}
                            </div>`;
                        });
                    questionsHtml += `</div>`;
                }
                questionsHtml += `</div>`;
            });

            // Layout
            container.innerHTML = `
            <div class="animate-in slide-in-from-bottom-4 duration-500 pb-20 relative">
                <div class="mb-8 no-print">
                    <button onclick="app.setView('home')" class="group flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium mb-4">
                        <div class="p-1 rounded-full bg-white border border-slate-200 group-hover:border-blue-200">
                            <i data-lucide="arrow-left" class="w-4 h-4"></i>
                        </div>
                        Volver
                    </button>
                    
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-200 pb-6">
                        <div class="flex items-center gap-4">
                            <span class="fi fi-${flagCode} text-5xl rounded shadow-sm"></span>
                            <h2 class="text-4xl font-bold text-slate-900">${summary.pais}</h2>
                        </div>
                        <button onclick="app.printReport('${summary.pais}')" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700 shadow-sm transition-all">
                            <i data-lucide="printer" class="w-4 h-4"></i> Generar Informe PDF
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    <!-- Sidebar Navigation -->
                    <div class="lg:col-span-1 space-y-6 lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto custom-scrollbar pr-2">
                         <div class="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 border border-blue-100 shadow-sm">
                            <h3 class="font-bold text-blue-800 mb-4 flex items-center gap-2">
                                <i data-lucide="info" class="w-5 h-5"></i> Resumen Ejecutivo
                            </h3>
                            <div class="space-y-4 text-sm">
                                <div><strong class="block text-slate-500 text-xs uppercase tracking-wide">Autoridad</strong><span class="text-slate-800 font-medium">${summary.autoridad_regulatoria}</span></div>
                                <div><strong class="block text-slate-500 text-xs uppercase tracking-wide">Sitio Web</strong><a href="${summary.sitio_web_oficial}" target="_blank" class="text-blue-600 hover:underline break-words">${summary.sitio_web_oficial}</a></div>
                                <div><strong class="block text-slate-500 text-xs uppercase tracking-wide mb-1">Contacto</strong><div class="flex items-start gap-2 text-slate-700 mb-1"><i data-lucide="mail" class="w-3 h-3 mt-1 text-slate-400"></i><span class="break-all">${summary.correo_contacto}</span></div></div>
                                <div><strong class="block text-slate-500 text-xs uppercase tracking-wide">Domicilio</strong><div class="flex items-start gap-2 text-slate-700"><i data-lucide="map-pin" class="w-3 h-3 mt-1 text-slate-400"></i><span>${summary.domicilio}</span></div></div>
                            </div>
                        </div>

                        <div class="bg-white rounded-xl shadow-sm border border-slate-100 p-2 no-print">
                            <h3 class="font-bold text-slate-800 px-4 py-3 text-sm border-b border-slate-50 mb-2">Navegación</h3>
                            ${CATEGORIES.map(cat => {
                                let catQuestions = (cat.id === 7) ? Object.entries(RESOURCE_SUBTITLES).map(([k, v]) => [k, v.title]) : Object.entries(QUESTIONS).filter(([k]) => k.startsWith(`${cat.id}.`));
                                return `
                                <details class="group bg-white rounded-lg border border-slate-100 overflow-hidden mb-2 transition-all open:ring-1 open:ring-blue-100 open:shadow-sm">
                                    <summary class="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-slate-50 transition-colors list-none text-sm font-bold text-slate-700 select-none">
                                        <span class="flex items-center gap-2">
                                            <i data-lucide="${cat.id === 7 ? 'link' : (cat.icon || 'file-check')}" class="w-4 h-4 text-blue-500"></i>
                                            ${cat.name}
                                        </span>
                                        <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400 transition-transform duration-200 group-open:rotate-180"></i>
                                    </summary>
                                    <div class="bg-slate-50 border-t border-slate-100">
                                        <button onclick="app.scrollToSection(${cat.id})" class="w-full text-left px-4 py-2 text-xs font-bold text-blue-600 hover:bg-blue-50 hover:underline border-b border-slate-100">Ir al inicio de sección</button>
                                        
                                        <!-- LISTA DE PREGUNTAS (MOSTRANDO TEXTO COMPLETO) -->
                                        ${catQuestions.map(([qId, qText]) => `
                                            <button onclick="app.scrollToQuestion('${qId}')" class="w-full text-left px-6 py-3 text-xs text-slate-600 hover:text-blue-700 hover:bg-blue-50/50 transition-colors border-b border-slate-100 last:border-0 leading-normal pl-8">
                                                <span class="font-bold mr-1 text-blue-500">${qId}</span> ${qText}
                                            </button>
                                        `).join('')}
                                    </div>
                                </details>`;
                            }).join('')}
                        </div>
                    </div>

                    <div class="lg:col-span-3 space-y-12">
                        ${questionsHtml}
                    </div>
                </div>
                <button id="scroll-top-btn" onclick="app.scrollToTop()" class="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 transform hover:scale-110 opacity-0 translate-y-10 pointer-events-none">
                    <i data-lucide="arrow-up" class="w-6 h-6"></i>
                </button>
            </div>`;
        } catch (error) {
            console.error(error);
            container.innerHTML = `<div class="text-red-500 text-center">Error cargando datos: ${error.message}</div>`;
        }
    },

    // VISTA: COMPARADOR
    renderComparisonTool: function(container) {
        container.innerHTML = `
        <div class="animate-in fade-in pb-20">
            <button onclick="app.setView('home')" class="mb-6 text-sm text-slate-500 hover:text-blue-600 font-medium flex items-center gap-1">
                <span>&larr;</span> Volver al inicio
            </button>
            <h2 class="text-3xl font-bold text-slate-800 mb-2">Comparador Normativo</h2>
            <p class="text-slate-500 mb-8">Selecciona un requisito para ver cómo se aplica en cada país.</p>

            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 max-w-3xl">
                <label class="block text-sm font-bold text-slate-700 mb-2">Requisito a comparar</label>
                <div class="flex gap-4 flex-col sm:flex-row">
                    <div class="relative flex-1">
                        <select id="compare-select" class="w-full appearance-none bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 pr-8">
                            <option value="">Selecciona una pregunta...</option>
                            ${CATEGORIES.filter(c => c.id !== 7).map(cat => `
                                <optgroup label="${cat.name}">
                                    ${Object.entries(QUESTIONS)
                                        .filter(([k]) => k.startsWith(`${cat.id}.`))
                                        .map(([k, v]) => `<option value="${k}">${k} - ${v.substring(0, 80)}...</option>`)
                                        .join('')}
                                </optgroup>
                            `).join('')}
                        </select>
                        <div class="absolute right-3 top-3.5 pointer-events-none text-slate-400">
                             <i data-lucide="chevron-down" class="w-4 h-4"></i>
                        </div>
                    </div>
                    <button onclick="app.executeCompare()" id="compare-btn" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                       <i data-lucide="search" class="w-4 h-4"></i> Comparar 
                    </button>
                </div>
            </div>

            <div id="compare-results" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        </div>`;
    },

    executeCompare: async function() {
        const select = document.getElementById('compare-select');
        const resultsContainer = document.getElementById('compare-results');
        const btn = document.getElementById('compare-btn');
        const questionId = select.value;

        if (!questionId) return;

        btn.innerText = 'Cargando...';
        btn.disabled = true;

        const dbKey = `q_${questionId.replace(/\./g, '_')}`;
        const hasBoolean = !NO_BOOLEAN_QUESTIONS.includes(questionId);
        
        let selectQuery = `pais, ${dbKey}_directa, ${dbKey}_ampliada`;
        if (hasBoolean) selectQuery += `, ${dbKey}_booleano`;

        // USAR faq_rows_corregido
        const { data, error } = await supabase.from('faq_rows_corregido').select(selectQuery).order('pais');

        btn.innerHTML = `<i data-lucide="search" class="w-4 h-4"></i> Comparar`;
        btn.disabled = false;
        lucide.createIcons();

        if (data) {
            resultsContainer.innerHTML = data.map(item => {
                const direct = item[`${dbKey}_directa`];
                const extended = item[`${dbKey}_ampliada`];
                const booleanVal = item[`${dbKey}_booleano`];

                return `
                <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col">
                    <div class="flex justify-between items-start mb-4 border-b pb-3">
                        <h3 class="font-bold text-lg text-blue-800">${item.pais}</h3>
                        ${booleanVal !== undefined ? `
                            <span class="px-2 py-1 rounded text-xs font-bold ${booleanVal ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}">
                                ${booleanVal ? 'SÍ' : 'NO'}
                            </span>
                        ` : ''}
                    </div>
                    <p class="text-slate-800 font-medium text-sm mb-3 flex-grow">
                        ${direct || 'Sin información'}
                    </p>
                    ${extended ? `
                        <details class="mt-2 text-xs text-slate-500 bg-slate-50 p-2 rounded cursor-pointer">
                            <summary class="font-bold text-blue-600 hover:text-blue-800 select-none">Ver detalle</summary>
                            <div class="mt-2 pt-2 border-t border-slate-200">${extended}</div>
                        </details>
                    ` : ''}
                </div>`;
            }).join('');
        }
    },

    // VISTA: FILTRO
    renderFilterTool: function(container) {
        this.state.filterCriteria = [];
        let filtersHtml = '';
        CATEGORIES.filter(c => c.id !== 7).forEach(cat => {
            const boolQuestions = Object.entries(QUESTIONS).filter(([k]) => k.startsWith(`${cat.id}.`) && !NO_BOOLEAN_QUESTIONS.includes(k));
            if (boolQuestions.length > 0) {
                filtersHtml += `
                <details class="group">
                    <summary class="list-none flex justify-between items-center font-medium text-slate-700 cursor-pointer p-2 hover:bg-slate-50 rounded">
                        <span class="text-sm">${cat.name}</span>
                        <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform"></i>
                    </summary>
                    <div class="pl-2 mt-2 space-y-2 border-l-2 ml-2">
                        ${boolQuestions.map(([k, v]) => `
                            <label class="flex items-start gap-3 cursor-pointer p-1 hover:bg-blue-50 rounded">
                                <input type="checkbox" onchange="app.toggleFilter('${k}')" class="mt-1 rounded border-slate-300 text-blue-600">
                                <span class="text-xs text-slate-600 leading-tight">${k} - ${v}</span>
                            </label>
                        `).join('')}
                    </div>
                </details>`;
            }
        });

        container.innerHTML = `
        <div class="animate-in fade-in pb-20">
             <button onclick="app.setView('home')" class="mb-6 text-sm text-slate-500 hover:text-blue-600 font-medium flex items-center gap-1">
                <span>&larr;</span> Volver al inicio
            </button>
            <h2 class="text-3xl font-bold text-slate-800 mb-8">Filtro Avanzado</h2>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-1 bg-white rounded-2xl border p-6 h-fit max-h-[80vh] overflow-y-auto">
                    <div class="flex justify-between items-center mb-4"><h3 class="font-bold">Criterios</h3></div>
                    <div class="space-y-4">${filtersHtml}</div>
                    <button onclick="app.executeFilter()" id="filter-btn" class="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-bold disabled:opacity-50" disabled>Buscar Países (0)</button>
                </div>
                <div id="filter-results" class="lg:col-span-2">
                    <div class="h-full flex flex-col items-center justify-center text-center p-12 bg-slate-50 rounded-2xl border-2 border-dashed text-slate-400">
                        <i data-lucide="filter" class="w-12 h-12 mb-4"></i>
                        <p>Selecciona criterios a la izquierda.</p>
                    </div>
                </div>
            </div>
        </div>`;
    },

    toggleFilter: function(qId) {
        const idx = this.state.filterCriteria.indexOf(qId);
        if (idx > -1) this.state.filterCriteria.splice(idx, 1);
        else this.state.filterCriteria.push(qId);
        const btn = document.getElementById('filter-btn');
        btn.innerText = `Buscar Países (${this.state.filterCriteria.length})`;
        btn.disabled = this.state.filterCriteria.length === 0;
    },

    executeFilter: async function() {
        const btn = document.getElementById('filter-btn');
        const container = document.getElementById('filter-results');
        btn.innerText = 'Cargando...';
        btn.disabled = true;

        // USAR faq_rows_corregido
        let query = supabase.from('faq_rows_corregido').select('pais');
        this.state.filterCriteria.forEach(criteria => {
             const dbKey = `q_${criteria.replace(/\./g, '_')}_booleano`;
             query = query.eq(dbKey, true);
        });

        const { data, error } = await query;
        btn.innerText = `Buscar Países (${this.state.filterCriteria.length})`;
        btn.disabled = false;

        if (data) {
            const countries = data.map(d => d.pais);
            if (countries.length === 0) {
                container.innerHTML = `<div class="p-8 bg-amber-50 text-amber-700 rounded-xl border">No hay resultados que cumplan todos los requisitos.</div>`;
            } else {
                container.innerHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">${countries.map(name => {
                    const cData = COUNTRIES_LIST.find(c => c.name === name);
                    return `<div onclick="app.selectCountry('${name}')" class="bg-white p-6 rounded-xl border hover:shadow-lg cursor-pointer transition-all"><div class="flex items-center gap-4"><span class="fi fi-${cData?.flagCode}"></span><h4 class="font-bold">${name}</h4></div></div>`;
                }).join('')}</div>`;
                lucide.createIcons();
            }
        }
    },

    toggleSource: function(elementId) {
        const el = document.getElementById(elementId);
        if (el) {
            el.classList.toggle('hidden');
            const btn = el.previousElementSibling;
            if(btn) {
                const isHidden = el.classList.contains('hidden');
                btn.innerHTML = `<i data-lucide="book-open" class="w-3 h-3"></i> ${isHidden ? 'Ver Fuente' : 'Ocultar Fuente'}`;
                lucide.createIcons();
            }
        }
    },

    scrollToSection: function(catId) {
        const element = document.getElementById(`cat-${catId}`);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    },

    scrollToQuestion: function(qId) {
        const elementId = `question-${qId.replace(/\./g, '-')}`;
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },

    scrollToTop: function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    printReport: function() {
        window.print();
    },
    
    setupGlobalEvents: function() {
        window.app = this;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});