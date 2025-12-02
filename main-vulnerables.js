// --- CONFIGURACIÓN Y CONSTANTES (POBLACIONES VULNERABLES) ---

const SUPABASE_URL = 'https://rhbudrqpetrzispcacyw.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoYnVkcnFwZXRyemlzcGNhY3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1ODI4NTQsImV4cCI6MjA3NDE1ODg1NH0.6uQ2Hg1aLHAQoG3HwxJBeBbrFRGRxUilH-60CRNl3J8';

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

// --- CATEGORÍAS ESPECÍFICAS DE VULNERABLES ---
const CATEGORIES = [
    { id: 1, name: 'Marco regulatorio general', icon: 'scale' },
    { id: 2, name: 'Investigación en mujeres embarazadas y lactancia', icon: 'baby' },
    { id: 3, name: 'Investigación en niños, niñas y adolescentes', icon: 'users' },
    { id: 4, name: 'Personas sin capacidad de consentir', icon: 'brain-circuit' },
    { id: 5, name: 'Pueblos originarios o comunidades indígenas', icon: 'tent' }
];

// --- PREGUNTAS ESPECÍFICAS DE VULNERABLES ---
const QUESTIONS = {
    '1.1': '¿La normativa nacional define explícitamente el concepto de "población vulnerable" o "sujeto vulnerable" en el contexto de investigación en seres humanos?',
    '1.2': '¿La normativa incluye definiciones específicas de "riesgo mínimo" aplicables a poblaciones vulnerables?',
    '1.3': '¿Se requieren aprobaciones o evaluaciones adicionales (más allá de ARN y CEI estándar) para estudios que incluyan poblaciones vulnerables?',
    '1.4': '¿La normativa identifica explícitamente como vulnerables a: embarazadas, menores, personas sin capacidad de consentir, pueblos originarios y personas institucionalizadas?',
    '2.1': '¿Está permitida la investigación en mujeres embarazadas?',
    '2.2': '¿Está permitida la investigación en mujeres en período de lactancia?',
    '2.3': '¿La normativa exige que la investigación en embarazadas/lactantes responda a necesidades de salud específicas de esta población o del feto/lactante?',
    '2.4': '¿Se requiere evidencia preclínica o de seguridad previa (estudios en animales gestantes, farmacocinética, toxicidad reproductiva) antes de incluir embarazadas?',
    '2.5': '¿El consentimiento informado debe incluir información específica sobre riesgos maternos, fetales/neonatales y efectos en la lactancia?',
    '2.6': '¿Se requiere el consentimiento o conocimiento de la pareja/progenitor para la participación de la mujer embarazada?',
    '2.7': '¿Existen requisitos obligatorios de seguimiento post-parto del recién nacido o de notificación de embarazos que ocurran durante el estudio?',
    '3.1': '¿Está permitida la investigación en menores de edad?',
    '3.2': '¿La normativa establece una edad específica que define "menor de edad" para efectos de investigación clínica?',
    '3.3': '¿La normativa establece categorías diferenciadas por edad (neonatos, lactantes, niños, adolescentes) con requisitos distintos?',
    '3.4': '¿Se exige que la investigación pediátrica responda a necesidades de salud propias de los menores y no pueda realizarse en adultos?',
    '3.5': '¿Se requiere el consentimiento de ambos padres/tutores legales?',
    '3.6': '¿Se requiere obtener el asentimiento del menor además del consentimiento de los padres/tutores?',
    '3.7': '¿La normativa establece que el rechazo o disentimiento del menor es vinculante (puede vetar su participación)?',
    '4.1': '¿Está permitida la investigación en personas sin capacidad de otorgar consentimiento informado?',
    '4.2': '¿La normativa define explícitamente qué constituye "incapacidad" para consentir (criterios médicos, judiciales, temporales/permanentes)?',
    '4.3': '¿Se exige justificar por qué la investigación debe realizarse específicamente en personas sin capacidad y no en personas capaces?',
    '4.4': '¿La normativa establece una jerarquía de representantes legales autorizados para otorgar el consentimiento sustituto?',
    '4.5': '¿Se requiere obtener el asentimiento de la persona sin capacidad cuando sea posible evaluar su comprensión parcial?',
    '4.6': '¿El rechazo o resistencia de la persona sin capacidad es vinculante incluso con consentimiento del representante?',
    '5.1': '¿Existe normativa específica o sección dedicada a la investigación en pueblos originarios/comunidades indígenas?',
    '5.2': '¿Se requiere obtener consentimiento libre, previo e informado de la comunidad o autoridad colectiva además del consentimiento individual?',
    '5.3': '¿La normativa exige adaptaciones culturales y lingüísticas obligatorias en el proceso de consentimiento (traducción a lenguas originarias, uso de intérpretes, formatos orales/visuales)?',
    '5.4': '¿Existen requisitos específicos sobre retorno de beneficios a la comunidad, uso de muestras biológicas/datos genéticos, o protección del conocimiento tradicional?'
};

// Preguntas sin booleano claro (según contexto anterior, asumo pocas o ninguna, pero dejo la lógica preparada)
const NO_BOOLEAN_QUESTIONS = []; 

// --- APLICACIÓN PRINCIPAL (OBJETO GLOBAL) ---

const app = {
    state: {
        view: 'home', // 'home', 'country', 'compare', 'filter'
        selectedCountry: null,
        searchTerm: '',
        comparisonResults: null,
        filteredCountries: null,
        filterCriteria: [],
        availableCountries: [] // Lista de países que tienen datos en la tabla PV
    },

    init: async function() {
        await this.fetchAvailableCountries();
        this.render();
        this.setupGlobalEvents();
    },

    fetchAvailableCountries: async function() {
        // Consultar qué países tienen al menos una entrada en faq_pv_rows
        const { data, error } = await supabase
            .from('faq_pv_rows')
            .select('pais');
        
        if (data) {
            // Extraer nombres únicos
            const countries = data.map(row => row.pais);
            this.state.availableCountries = [...new Set(countries)];
        }
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
        // Validación adicional por seguridad
        if (!this.state.availableCountries.includes(countryName)) return;

        this.state.selectedCountry = countryName;
        this.setView('country');
    },

    // --- RENDERIZADORES ---

    render: function() {
        const container = document.getElementById('app-container');
        const navButtons = document.querySelectorAll('nav button');
        
        // Actualizar estado activo en navegación
        navButtons.forEach(btn => {
            btn.classList.remove('bg-blue-50', 'text-slate-700', 'ring-1', 'ring-blue-200');
            btn.classList.add('text-slate-500');
        });
        const activeBtn = document.getElementById(`nav-${this.state.view}`);
        if(activeBtn) {
            activeBtn.classList.remove('text-slate-500');
            activeBtn.classList.add('bg-blue-50', 'text-slate-700', 'ring-1', 'ring-blue-200');
        }

        // Router simple
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
        
        // Inicializar iconos
        lucide.createIcons();
    },

    // VISTA: HOME
    renderHome: function(container) {
        // SVG del Mapa con Lógica de Disponibilidad
        let mapPathsHtml = '';
        for (const [id, pathData] of Object.entries(MAP_PATHS)) {
            const country = COUNTRIES_LIST.find(c => c.id === id);
            const coords = MAP_COORDS[id];
            
            if (country && coords) {
                const isAvailable = this.state.availableCountries.includes(country.name);
                
                // Estilos condicionales
                const fillClass = isAvailable ? 'fill-[#f8fafc]' : 'fill-slate-200';
                const strokeColor = isAvailable ? '#94a3b8' : '#cbd5e1';
                const hoverClass = isAvailable 
                    ? 'hover:fill-teal-500 hover:stroke-teal-700 cursor-pointer' 
                    : 'cursor-not-allowed';
                const clickAction = isAvailable ? `onclick="app.selectCountry('${country.name}')"` : '';
                const tooltipText = isAvailable ? country.name : `${country.name} (En construcción)`;
                const tooltipBg = isAvailable ? 'rgba(15, 60, 42, 0.9)' : 'rgba(100, 116, 139, 0.9)';

                mapPathsHtml += `
                <g class="group" ${clickAction}>
                    <path d="${pathData}" stroke="${strokeColor}" stroke-width="1" class="map-path ${fillClass} ${hoverClass} transition-colors duration-300"></path>
                    <g class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <rect x="${coords.x - (tooltipText.length * 3)}" y="${coords.y - 20}" width="${tooltipText.length * 6 + 10}" height="20" rx="4" fill="${tooltipBg}"></rect>
                        <text x="${coords.x}" y="${coords.y - 6}" text-anchor="middle" fill="white" font-size="10" font-weight="bold">${tooltipText}</text>
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
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Investigación con personas y grupos vulnerables</span>
                    </h1>
                    <p class="text-lg text-slate-500 mb-8">
                        Análisis específico de normativas para investigación con mujeres embarazadas, niños, comunidades indígenas y personas con capacidad disminuida.
                    </p>
                    
                    <!-- Search Bar -->
                    <div class="max-w-md mx-auto relative group z-20">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i data-lucide="search" class="h-5 w-5 text-slate-400"></i>
                        </div>
                        <input 
                            type="text" 
                            id="home-search-input"
                            class="block w-full pl-10 pr-4 py-3 border border-slate-200 rounded-full bg-white focus:ring-4 focus:ring-teal-50 focus:border-teal-500 transition-all shadow-sm hover:shadow-md"
                            placeholder="Buscar país (ej. Chile, Colombia)..."
                            value="${this.state.searchTerm}"
                            autocomplete="off"
                        >
                        <!-- Dropdown Results Container -->
                        <div id="search-results-dropdown" class="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-30 hidden">
                            <!-- Inyectado dinámicamente -->
                        </div>
                    </div>
                </div>

                <!-- Map Section -->
                <div class="mb-12">
                    <div class="relative w-full max-w-2xl mx-auto h-[500px] md:h-[600px] bg-teal-50/50 rounded-3xl border border-teal-100 shadow-inner overflow-hidden flex items-center justify-center p-4">
                        <div class="absolute top-4 right-4 bg-white/80 backdrop-blur p-3 rounded-lg border border-teal-100 text-xs text-teal-800 z-10 max-w-xs shadow-sm">
                            <p class="font-bold mb-1">Mapa Interactivo (PV)</p>
                            <p>Selecciona un país para ver información normativa (investigación en poblaciones vulnerables). </p>
                        </div>
                        <svg viewBox="0 0 500 500" class="w-full h-full drop-shadow-xl" style="filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))">
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

        // Filtrar países que coincidan con el término Y que estén disponibles en la BD
        const results = COUNTRIES_LIST.filter(c => 
            c.name.toLowerCase().includes(term) && 
            this.state.availableCountries.includes(c.name)
        );
        
        dropdown.classList.remove('hidden');

        if (results.length > 0) {
            dropdown.innerHTML = results.map(c => `
                <button onclick="app.selectCountry('${c.name}')" class="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center gap-3 border-b border-slate-50 last:border-0">
                    <span class="fi fi-${c.flagCode} shadow-sm rounded-sm"></span>
                    <span class="font-medium text-slate-700">${c.name}</span>
                </button>
            `).join('');
        } else {
            dropdown.innerHTML = '<div class="p-4 text-slate-400 text-sm text-center">No se encontraron resultados disponibles.</div>';
        }
    },

    // VISTA: DETALLE PAÍS (VULNERABLES)
    renderCountryDetail: async function(container) {
        const countryName = this.state.selectedCountry;
        
        container.innerHTML = `
            <div class="flex justify-center items-center h-96">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
            </div>`;

        try {
            // NOTA: Consulta a 'faq_pv_rows' en lugar de 'faq'
            const [faqRes, summaryRes] = await Promise.all([
                supabase.from('faq_pv_rows').select('*').eq('pais', countryName).single(),
                supabase.from('resumen_ejecutivo').select('*').eq('pais', countryName).single()
            ]);

            const faq = faqRes.data;
            const summary = summaryRes.data;

            if (!faq || !summary) {
                container.innerHTML = '<div class="text-center p-10 text-red-500">Datos no disponibles para este país en este módulo.</div>';
                return;
            }

            const countryData = COUNTRIES_LIST.find(c => c.name === countryName);
            const flagCode = countryData ? countryData.flagCode : 'xx';

            // Generar HTML de Preguntas (PV)
            let questionsHtml = '';
            CATEGORIES.forEach(cat => {
                // Verificar si hay preguntas para esta categoría
                const catQuestions = Object.entries(QUESTIONS).filter(([key]) => key.startsWith(`${cat.id}.`));
                if (catQuestions.length === 0) return;

                questionsHtml += `
                <div id="cat-${cat.id}" class="scroll-mt-24 mb-12">
                    <h3 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3 pb-2 border-b border-slate-200">
                        <i data-lucide="${cat.icon}" class="w-6 h-6 text-teal-600"></i>
                        ${cat.name}
                    </h3>
                    <div class="space-y-6">`;
                    
                catQuestions.map(([qId, qText]) => {
                    // Prefijo 'q_pv_'
                    const dbKey = `q_pv_${qId.replace(/\./g, '_')}`;
                    const htmlId = `question-${qId.replace(/\./g, '-')}`; // ID normalizado
                    const directAnswer = faq[`${dbKey}_directa`];
                    const extendedAnswer = faq[`${dbKey}_ampliada`];
                    const source = faq[`${dbKey}_fuente`];
                    
                    const cleanSource = source 
                        ? source.split('\n').map(line => line.trim()).filter(line => line.length > 0).join('\n') 
                        : '';

                    questionsHtml += `
                    <div id="${htmlId}" class="bg-white rounded-xl border border-slate-200 shadow-sm transition-all overflow-hidden page-break p-6 scroll-mt-28">
                        <h4 class="font-bold text-slate-800 text-lg mb-4">${qId} - ${qText}</h4>
                        <div class="mb-4 text-sm text-slate-800 font-medium bg-teal-50/50 p-4 rounded-lg border-l-4 border-teal-500">
                            ${directAnswer || "Información no disponible"}
                        </div>
                        ${extendedAnswer ? `<div class="mb-4 text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">${extendedAnswer}</div>` : ''}
                        ${cleanSource ? `
                            <div class="mt-4 pt-4 border-t border-slate-100">
                                <button onclick="app.toggleSource('source-${qId.replace(/\./g, '-')}')" class="text-xs font-bold text-slate-500 hover:text-teal-600 flex items-center gap-2 transition-colors">
                                    <i data-lucide="book-open" class="w-3 h-3"></i> Ver Fuente
                                </button>
                                <div id="source-${qId.replace(/\./g, '-')}" class="hidden mt-3 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-500 font-mono whitespace-pre-wrap animate-in fade-in duration-200">${cleanSource}</div>
                            </div>` : ''}
                    </div>`;
                });
                questionsHtml += `</div></div>`;
            });

            container.innerHTML = `
            <div class="animate-in slide-in-from-bottom-4 duration-500 pb-20 relative">
                <!-- Header -->
                <div class="mb-8 no-print">
                    <button onclick="app.setView('home')" class="group flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors text-sm font-medium mb-4">
                        <div class="p-1 rounded-full bg-white border border-slate-200 group-hover:border-teal-200">
                            <i data-lucide="arrow-left" class="w-4 h-4"></i>
                        </div>
                        Volver
                    </button>
                    
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-200 pb-6">
                        <div class="flex items-center gap-4">
                            <span class="fi fi-${flagCode} text-5xl rounded shadow-sm"></span>
                            <div>
                                <h2 class="text-4xl font-bold text-slate-900">${summary.pais}</h2>
                                <span class="text-teal-600 font-bold text-sm uppercase tracking-wider">Módulo Poblaciones Vulnerables</span>
                            </div>
                        </div>
                        <button onclick="app.printReport('${summary.pais}')" class="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-teal-700 shadow-sm transition-all">
                            <i data-lucide="printer" class="w-4 h-4"></i> Generar Informe PDF
                        </button>
                    </div>
                </div>

                <!-- Print Header -->
                <div class="print-only text-center mb-8 border-b pb-4">
                    <h1 class="text-2xl font-bold text-teal-800">InfoRegLAC - Investigación con personas y grupos vulnerables</h1>
                    <h2 class="text-xl text-slate-700">${summary.pais}</h2>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    <!-- Sidebar Sticky con Acordeones Desplegables -->
                    <div class="lg:col-span-1 space-y-6 lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto custom-scrollbar pr-2">
                         <!-- Executive Summary -->
                        <div class="bg-gradient-to-br from-teal-50 to-slate-50 rounded-2xl p-6 border border-teal-100 shadow-sm">
                            <h3 class="font-bold text-teal-800 mb-4 flex items-center gap-2">
                                <i data-lucide="info" class="w-5 h-5"></i> Resumen Ejecutivo
                            </h3>
                            <div class="space-y-4 text-sm">
                                <div><strong class="block text-slate-500 text-xs uppercase tracking-wide">Autoridad</strong><span class="text-slate-800 font-medium">${summary.autoridad_regulatoria}</span></div>
                                <div><strong class="block text-slate-500 text-xs uppercase tracking-wide">Sitio Web</strong><a href="${summary.sitio_web_oficial}" target="_blank" class="text-teal-600 hover:underline break-words">${summary.sitio_web_oficial}</a></div>
                            </div>
                        </div>

                        <!-- Navigation Menu -->
                        <div class="bg-white rounded-xl shadow-sm border border-slate-100 p-2 no-print">
                            <h3 class="font-bold text-slate-800 px-4 py-3 text-sm border-b border-slate-50 mb-2">Navegación</h3>
                            
                            ${CATEGORIES.map(cat => {
                                // Filtrar preguntas de la categoría
                                const catQuestions = Object.entries(QUESTIONS).filter(([k]) => k.startsWith(`${cat.id}.`));

                                return `
                                <details class="group bg-white rounded-lg border border-slate-100 overflow-hidden mb-2 transition-all open:ring-1 open:ring-teal-100 open:shadow-sm">
                                    <summary class="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-slate-50 transition-colors list-none text-sm font-bold text-slate-700 select-none">
                                        <span class="flex items-center gap-2">
                                            <i data-lucide="${cat.icon}" class="w-4 h-4 text-teal-600"></i>
                                            ${cat.name}
                                        </span>
                                        <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400 transition-transform duration-200 group-open:rotate-180"></i>
                                    </summary>
                                    
                                    <div class="bg-slate-50 border-t border-slate-100">
                                        <!-- Enlace rápido a la sección completa -->
                                        <button onclick="app.scrollToSection(${cat.id})" class="w-full text-left px-4 py-2 text-xs font-bold text-teal-600 hover:bg-teal-50 hover:underline border-b border-slate-100">
                                            Ir al inicio de sección
                                        </button>
                                        
                                        <!-- Lista de preguntas desplegadas -->
                                        ${catQuestions.map(([qId, qText]) => `
                                            <button onclick="app.scrollToQuestion('${qId}')" class="w-full text-left px-6 py-2 text-xs text-slate-600 hover:text-teal-700 hover:bg-teal-50/50 transition-colors border-b border-slate-100 last:border-0 leading-tight pl-8">
                                                <span class="font-bold mr-1">${qId}</span> ${qText.length > 50 ? qText.substring(0, 50) + '...' : qText}
                                            </button>
                                        `).join('')}
                                    </div>
                                </details>
                                `;
                            }).join('')}
                        </div>
                    </div>

                    <!-- Main Content -->
                    <div class="lg:col-span-3 space-y-12">
                        ${questionsHtml}
                    </div>
                </div>

                <!-- Floating Scroll Top -->
                <button id="scroll-top-btn" onclick="app.scrollToTop()" class="fixed bottom-8 right-8 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 z-50 transform hover:scale-110 opacity-0 translate-y-10 pointer-events-none">
                    <i data-lucide="arrow-up" class="w-6 h-6"></i>
                </button>
            </div>`;

            window.onscroll = function() {
                const btn = document.getElementById('scroll-top-btn');
                if (btn) {
                    if (window.scrollY > 400) {
                        btn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
                    } else {
                        btn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
                    }
                }
            };

        } catch (error) {
            console.error(error);
            container.innerHTML = `<div class="text-red-500 text-center">Error cargando datos: ${error.message}</div>`;
        }
    },

    // VISTA: COMPARADOR (VULNERABLES)
    renderComparisonTool: function(container) {
        container.innerHTML = `
        <div class="animate-in fade-in pb-20">
            <button onclick="app.setView('home')" class="mb-6 text-sm text-slate-500 hover:text-teal-600 font-medium flex items-center gap-1">
                <span>&larr;</span> Volver al inicio
            </button>
            
            <h2 class="text-3xl font-bold text-slate-800 mb-2">Comparador (Poblaciones Vulnerables)</h2>
            <p class="text-slate-500 mb-8">Selecciona un requisito para ver cómo se aplica en cada país.</p>

            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 max-w-3xl">
                <label class="block text-sm font-bold text-slate-700 mb-2">Requisito a comparar</label>
                <div class="flex gap-4 flex-col sm:flex-row">
                    <div class="relative flex-1">
                        <select id="compare-select" class="w-full appearance-none bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block p-3 pr-8">
                            <option value="">Selecciona una pregunta...</option>
                            ${CATEGORIES.map(cat => `
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
                    <button onclick="app.executeCompare()" id="compare-btn" class="bg-teal-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-teal-700 transition-colors flex items-center justify-center gap-2">
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

        // Prefijo q_pv_
        const dbKey = `q_pv_${questionId.replace(/\./g, '_')}`;
        const hasBoolean = !NO_BOOLEAN_QUESTIONS.includes(questionId);
        
        let selectQuery = `pais, ${dbKey}_directa, ${dbKey}_ampliada`;
        if (hasBoolean) selectQuery += `, ${dbKey}_booleano`;

        const { data, error } = await supabase
            .from('faq_pv_rows')
            .select(selectQuery)
            .order('pais');

        btn.innerHTML = `<i data-lucide="search" class="w-4 h-4"></i> Comparar`;
        btn.disabled = false;
        lucide.createIcons();

        if (data) {
            resultsContainer.innerHTML = data.map(item => {
                const direct = item[`${dbKey}_directa`];
                const extended = item[`${dbKey}_ampliada`];
                const booleanVal = item[`${dbKey}_booleano`];

                return `
                <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col">
                    <div class="flex justify-between items-start mb-4 border-b border-slate-100 pb-3">
                        <h3 class="font-bold text-lg text-teal-800">${item.pais}</h3>
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
                            <summary class="font-bold text-teal-600 hover:text-teal-800 select-none">Ver detalle</summary>
                            <div class="mt-2 pt-2 border-t border-slate-200">
                                ${extended}
                            </div>
                        </details>
                    ` : ''}
                </div>`;
            }).join('');
        }
    },

    // VISTA: FILTRO (VULNERABLES)
    renderFilterTool: function(container) {
        this.state.filterCriteria = []; 
        
        let filtersHtml = '';
        CATEGORIES.forEach(cat => {
            const boolQuestions = Object.entries(QUESTIONS).filter(([k]) => k.startsWith(`${cat.id}.`) && !NO_BOOLEAN_QUESTIONS.includes(k));
            if (boolQuestions.length > 0) {
                filtersHtml += `
                <details class="group">
                    <summary class="list-none flex justify-between items-center font-medium text-slate-700 cursor-pointer p-2 hover:bg-slate-50 rounded">
                        <span class="text-sm flex items-center gap-2"><i data-lucide="${cat.icon}" class="w-3 h-3 text-slate-400"></i> ${cat.name}</span>
                        <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform"></i>
                    </summary>
                    <div class="pl-2 mt-2 space-y-2 border-l-2 border-slate-100 ml-2">
                        ${boolQuestions.map(([k, v]) => `
                            <label class="flex items-start gap-3 cursor-pointer p-1 hover:bg-teal-50 rounded">
                                <input type="checkbox" onchange="app.toggleFilter('${k}')" class="mt-1 rounded border-slate-300 text-teal-600 focus:ring-teal-500">
                                <span class="text-xs text-slate-600 leading-tight">${k} - ${v}</span>
                            </label>
                        `).join('')}
                    </div>
                </details>`;
            }
        });

        container.innerHTML = `
        <div class="animate-in fade-in pb-20">
             <button onclick="app.setView('home')" class="mb-6 text-sm text-slate-500 hover:text-teal-600 font-medium flex items-center gap-1">
                <span>&larr;</span> Volver al inicio
            </button>

            <h2 className="text-3xl font-bold text-slate-800 mb-2">Filtro Avanzado (PV)</h2>
            <p className="text-slate-500 mb-8">Encuentra países que cumplan con criterios de vulnerabilidad específicos.</p>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Sidebar -->
                <div class="lg:col-span-1 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 h-fit max-h-[80vh] overflow-y-auto custom-scrollbar">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="font-bold text-slate-800">Criterios</h3>
                        <button onclick="app.renderFilterTool(document.getElementById('app-container'))" class="text-xs text-red-500 font-medium hover:underline">Limpiar</button>
                    </div>
                    <div class="space-y-4">${filtersHtml}</div>
                    <button onclick="app.executeFilter()" id="filter-btn" class="w-full mt-6 bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                        Buscar Países (0)
                    </button>
                </div>

                <!-- Results -->
                <div id="filter-results" class="lg:col-span-2">
                    <div class="h-full flex flex-col items-center justify-center text-center p-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-400">
                        <i data-lucide="filter" class="w-12 h-12 mb-4 opacity-50"></i>
                        <p>Selecciona criterios a la izquierda para ver resultados.</p>
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
        
        btn.innerText = 'Filtrando...';
        btn.disabled = true;

        let query = supabase.from('faq_pv_rows').select('pais');
        this.state.filterCriteria.forEach(criteria => {
             const dbKey = `q_pv_${criteria.replace(/\./g, '_')}_booleano`;
             query = query.eq(dbKey, true);
        });

        const { data, error } = await query;
        
        btn.innerText = `Buscar Países (${this.state.filterCriteria.length})`;
        btn.disabled = false;

        if (data) {
            const countries = data.map(d => d.pais);
            if (countries.length === 0) {
                container.innerHTML = `<div class="p-8 bg-amber-50 text-amber-700 rounded-xl border border-amber-200">No se encontraron países que cumplan con todos los criterios.</div>`;
            } else {
                container.innerHTML = `
                <div>
                    <div class="mb-4 flex items-center justify-between">
                        <h3 class="font-bold text-lg text-slate-800">Resultados</h3>
                        <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded-full">${countries.length} Países encontrados</span>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        ${countries.map(name => {
                            const cData = COUNTRIES_LIST.find(c => c.name === name);
                            return `
                            <div onclick="app.selectCountry('${name}')" class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-teal-300 cursor-pointer transition-all group">
                                <div class="flex items-center gap-4">
                                    ${cData ? `<span class="fi fi-${cData.flagCode} text-3xl shadow-sm rounded-sm"></span>` : ''}
                                    <h4 class="font-bold text-lg text-slate-800 group-hover:text-teal-600">${name}</h4>
                                </div>
                                <div class="mt-4 flex items-center gap-2 text-xs font-bold text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Ver ficha completa <i data-lucide="chevron-right" class="w-3 h-3"></i>
                                </div>
                            </div>`;
                        }).join('')}
                    </div>
                </div>`;
                lucide.createIcons();
            }
        }
    },

    // --- UTILIDADES ---

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

    // NUEVA FUNCIÓN: Scroll a una pregunta específica (PV)
    scrollToQuestion: function(qId) {
        // Normalizamos el ID como lo hicimos en el render
        const elementId = `question-${qId.replace(/\./g, '-')}`;
        const element = document.getElementById(elementId);
        
        if (element) {
            // Scroll al elemento con comportamiento suave
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },

    scrollToTop: function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    printReport: async function(countryName) {
        try {
            await supabase.from('descargas_informes').insert({ 
                pais: countryName, 
                tipo_informe: 'Poblaciones Vulnerables'
            });
        } catch (e) { console.error(e); }
        window.print();
    },
    
    setupGlobalEvents: function() {
        window.app = this;
    }
};

// Iniciar aplicación
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});