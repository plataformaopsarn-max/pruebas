// Supabase Configuration
const supabaseUrl = 'https://rhbudrqpetrzispcacyw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoYnVkcnFwZXRyemlzcGNhY3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1ODI4NTQsImV4cCI6MjA3NDE1ODg1NH0.6uQ2Hg1aLHAQoG3HwxJBeBbrFRGRxUilH-60CRNl3J8';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseAnonKey);

// Data Configuration
const categories = [
    { id: 1, name: '1. Autoridades y marco general' },
    { id: 2, name: '2. Rol y obligaciones del patrocinador' },
    { id: 3, name: '3. Autorización inicial del ensayo clínico' },
    { id: 4, name: '4. Gestión del producto en investigación (PI)' },
    { id: 5, name: '5. Conducción y cierre del ensayo' },
    { id: 6, name: '6. Regulaciones específicas adicionales' },
    { id: 7, name: '7. Recursos prácticos (formularios, guías y normativas)' }
];

const canonicalQuestions = {
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

const countryFlags = {
    'Argentina': 'fi fi-ar',
    'Bolivia': 'fi fi-bo',
    'Brasil': 'fi fi-br',
    'Chile': 'fi fi-cl',
    'Colombia': 'fi fi-co',
    'Costa Rica': 'fi fi-cr',
    'Cuba': 'fi fi-cu',
    'Ecuador': 'fi fi-ec',
    'El Salvador': 'fi fi-sv',
    'Guatemala': 'fi fi-gt',
    'Haití': 'fi fi-ht',
    'Honduras': 'fi fi-hn',
    'Jamaica': 'fi fi-jm',
    'México': 'fi fi-mx',
    'Nicaragua': 'fi fi-ni',
    'Panamá': 'fi fi-pa',
    'Paraguay': 'fi fi-py',
    'Perú': 'fi fi-pe',
    'República Dominicana': 'fi fi-do',
    'Trinidad y Tobago': 'fi fi-tt',
    'Uruguay': 'fi fi-uy',
    'Venezuela': 'fi fi-ve'
};

const noBooleanQuestions = ['1.1', '1.2', '1.3', '3.7'];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    addEventListeners();
    populateRequirementDropdown();
    populateFilterCheckboxes();
});

// Event Listeners
function addEventListeners() {
    // Main results content event delegation
    document.getElementById('main-results-content').addEventListener('click', function(event) {
        // Source toggle
        const sourceToggle = event.target.closest('.source-toggle');
        if (sourceToggle) {
            const sourceElement = document.getElementById(sourceToggle.dataset.target);
            if (sourceElement) {
                sourceElement.style.display = sourceElement.style.display === 'block' ? 'none' : 'block';
            }
            return;
        }

        // Expand button
        const expandButton = event.target.closest('.expand-info-button');
        if (expandButton) {
            const targetElement = document.getElementById(expandButton.dataset.target);
            if (targetElement) {
                const isVisible = targetElement.style.display === 'block';
                targetElement.style.display = isVisible ? 'none' : 'block';
                expandButton.textContent = isVisible ? 'Ampliar información' : 'Ocultar información';
            }
            return;
        }

        // View country button
        const viewCountryBtn = event.target.closest('.view-full-country-info-btn');
        if (viewCountryBtn) {
            const countryName = viewCountryBtn.dataset.country;
            if (countryName) {
                fetchAndDisplayCountry(countryName);
            }
            return;
        }
    });

    // Sidebar navigation event delegation
    document.getElementById('sidebar-nav').addEventListener('click', function(event) {
        const categoryTitle = event.target.closest('.sidebar-category-title');
        if (categoryTitle) {
            const parentCategory = categoryTitle.closest('.sidebar-category');
            if (parentCategory) {
                parentCategory.classList.toggle('active');
            }
        }
    });

    // Filter checkbox container event delegation
    document.getElementById('filter-checkbox-container').addEventListener('click', function(event) {
        const categoryTitle = event.target.closest('.filter-category-title');
        if (categoryTitle) {
            const parentCategory = categoryTitle.closest('.filter-category');
            if (parentCategory) {
                parentCategory.classList.toggle('active');
            }
        }
    });
}

// Tab Switching
function switchTab(event, tabName) {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    event.currentTarget.classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

// Search by Country
function searchByCountry() {
    const countryName = document.getElementById('country-select').value;
    if (countryName) {
        fetchAndDisplayCountry(countryName);
    } else {
        alert('Por favor, seleccione un país.');
    }
}

async function fetchAndDisplayCountry(countryName) {
    if (!countryName) return;
    showLoading();
    
    try {
        const [faqRes, summaryRes, linksRes] = await Promise.all([
            supabaseClient.from('faq').select('*').eq('pais', countryName).single(),
            supabaseClient.from('resumen_ejecutivo').select('*').eq('pais', countryName).single(),
            supabaseClient.from('enlaces').select('*').eq('pais', countryName).order('question_code')
        ]);
        
        if (faqRes.error) throw new Error(`Error en FAQ: ${faqRes.error.message}`);
        if (summaryRes.error) throw new Error(`Error en Resumen: ${summaryRes.error.message}`);
        if (linksRes.error) throw new Error(`Error en Enlaces: ${linksRes.error.message}`);
        
        displayCountryResults(faqRes.data, summaryRes.data, linksRes.data);
    } catch (error) {
        showError(`No se pudieron cargar los datos para ${countryName}. Detalles: ${error.message}`);
    }
}

function displayCountryResults(faqData, summaryData, linksData) {
    const mainContent = document.getElementById('main-results-content');
    const sidebarNav = document.getElementById('sidebar-nav');
    
    let mainHtml = `<div class="results-content-inner">
        <div id="print-header">
            <img src="Logo2.png" alt="IRENLyC Logo">
            <h1>Información Regulatoria para Ensayos Clínicos de Latinoamérica y Caribe</h1>
        </div>
        
        <div class="print-button-container"> 
            <button onclick="printReport()" class="search-button report-print-btn">
                <i class="fas fa-print"></i> <span>Imprimir/Generar PDF del Informe</span>
            </button>
        </div>
        
        <div class="country-header">
            <div class="country-flag"><span class="${countryFlags[faqData.pais]}"></span></div>
            <div>
                <div class="country-name">${faqData.pais}</div>
                <div>${summaryData.autoridad_regulatoria}</div>
            </div>
        </div>
        
        <div class="executive-summary">
            <h2><i class="fas fa-info-circle"></i> Resumen Ejecutivo</h2>
            <div class="summary-item"><strong>Autoridad:</strong> <span>${summaryData.autoridad_regulatoria || 'No disponible'}</span></div>
            <div class="summary-item"><strong>Sitio Web:</strong> <a href="${summaryData.sitio_web_oficial}" target="_blank" rel="noopener noreferrer">${summaryData.sitio_web_oficial || 'No disponible'}</a></div>
            <div class="summary-item"><strong>Email:</strong> <span>${summaryData.correo_contacto || 'No disponible'}</span></div>
            <div class="summary-item"><strong>Teléfonos:</strong> <span>${summaryData.telefonos || 'No disponible'}</span></div>
            <div class="summary-item"><strong>Domicilio:</strong> <span>${summaryData.domicilio || 'No disponible'}</span></div>
        </div>`;
    
    let sidebarHtml = `<h3><i class="fas fa-bars"></i> Navegación</h3>`;

    categories.forEach(category => {
        const categoryQuestions = Object.keys(canonicalQuestions).filter(q => q.startsWith(category.id + '.'));
        if (categoryQuestions.length === 0 && category.id !== 7) return;

        mainHtml += `<h2 id="category-${category.id}" style="margin-top: 40px; color: var(--primary-blue); border-bottom: 2px solid var(--neutral-200); padding-bottom: 10px;">${category.name}</h2>`;
        
        sidebarHtml += `<div class="sidebar-category">
            <div class="sidebar-category-title">
                <span>${category.name}</span>
                <i class="fas fa-chevron-right indicator-icon"></i>
            </div>
            <ul class="sidebar-question-list">`;
        
        if (category.id === 7) {
            sidebarHtml += `<li><a href="#category-7">Ver todos los recursos</a></li>`;
        } else {
            categoryQuestions.forEach(qCode => {
                sidebarHtml += `<li><a href="#question-${qCode.replace(/\./g, '-')}">${qCode} ${canonicalQuestions[qCode]}</a></li>`;
            });
        }
        
        sidebarHtml += `</ul></div>`;

        // Render category content
        if (category.id === 7) {
            if (linksData && linksData.length > 0) {
                const linkCategories = {
                    '7.1': '7.1. Normativas Clave de Referencia Rápida',
                    '7.2': '7.2. Formularios Oficiales',
                    '7.3': '7.3. Guías, Instructivos Oficiales y Web'
                };

                Object.keys(linkCategories).forEach(code => {
                    const linksForCategory = linksData.filter(link => link.question_code === code);
                    if (linksForCategory.length > 0) {
                        mainHtml += `<h3 class="resource-subtitle">${linkCategories[code]}</h3>`;
                        linksForCategory.forEach(link => {
                            mainHtml += `<div class="resource-card">
                                <h4><i class="fas fa-link"></i> ${link.titulo || 'Enlace'}</h4>
                                <p>${link['proposito_descripcion'] || 'Sin descripción.'}</p>
                                <a href="${link.enlace}" target="_blank" rel="noopener noreferrer">Acceder al recurso <i class="fas fa-external-link-alt"></i></a>
                            </div>`;
                        });
                    }
                });
            } else {
                mainHtml += `<p>No hay recursos prácticos o enlaces disponibles para este país.</p>`;
            }
        } else {
            categoryQuestions.forEach(qCode => {
                const dbKey = `q_${qCode.replace(/\./g, '_')}`;
                const anchorId = `question-${qCode.replace(/\./g, '-')}`;
                
                mainHtml += `<div class="requirement" id="${anchorId}">
                    <div class="requirement-title">${qCode} - ${canonicalQuestions[qCode]}</div>`;
                
                if (faqData[`${dbKey}_directa`]) {
                    mainHtml += `<div class="requirement-direct-answer">${faqData[`${dbKey}_directa`]}</div>`;
                }
                
                if (faqData[`${dbKey}_ampliada`]) {
                    mainHtml += `<div class="requirement-detail">${faqData[`${dbKey}_ampliada`]}</div>`;
                }
                
                if (faqData[`${dbKey}_fuente`]) {
                    mainHtml += `<button class="source-toggle" data-target="source-${anchorId}">
                        <i class="fas fa-book"></i> Ver Fuente
                    </button>
                    <div class="requirement-source" id="source-${anchorId}">${faqData[`${dbKey}_fuente`]}</div>`;
                }
                
                mainHtml += `</div>`;
            });
        }
    });
    
    mainHtml += `</div>`;

    mainContent.innerHTML = mainHtml;
    sidebarNav.innerHTML = sidebarHtml;
    sidebarNav.style.display = 'block';
    document.getElementById('results-section').classList.add('show');
}

// Search by Requirement
async function searchByRequirement() {
    const requirementCode = document.getElementById('requirement-select').value;
    if (!requirementCode) return alert('Por favor, seleccione un requisito.');
    
    showLoading();
    
    try {
        const dbKey = `q_${requirementCode.replace(/\./g, '_')}`;
        const hasBoolean = !noBooleanQuestions.includes(requirementCode);
        
        let fields = `pais, ${dbKey}_directa, ${dbKey}_ampliada`;
        if (hasBoolean) fields += `, ${dbKey}_booleano`;
        
        const { data, error } = await supabaseClient
            .from('faq')
            .select(fields)
            .order('pais');
        
        if (error) throw error;
        
        displayRequirementComparison(requirementCode, data, hasBoolean);
    } catch (error) {
        showError(`No se pudieron cargar los datos de comparación.`);
    }
}

function displayRequirementComparison(reqCode, countries, hasBoolean) {
    const mainContent = document.getElementById('main-results-content');
    const dbKey = `q_${reqCode.replace(/\./g, '_')}`;
    
    let html = `<div class="results-content-inner">
        <div style="margin-bottom: 32px;">
            <h2 style="color: var(--primary-blue);">${canonicalQuestions[reqCode]}</h2>
            <p>Comparativa entre todos los países disponibles.</p>
        </div>
        <div>`;
    
    countries.forEach((country, index) => {
        const directa = country[`${dbKey}_directa`] || 'Información no disponible.';
        const ampliada = country[`${dbKey}_ampliada`];
        const detailId = `detail-compare-${index}`;
        
        let statusBadge = '';
        if (hasBoolean) {
            const booleanValue = country[`${dbKey}_booleano`];
            if (booleanValue === true) {
                statusBadge = '<span class="status-badge yes">✓ SÍ</span>';
            } else if (booleanValue === false) {
                statusBadge = '<span class="status-badge no">✗ NO</span>';
            }
        }
        
        html += `<div class="comparison-card">
            <div class="comparison-card-header">
                <h3><span class="fi ${countryFlags[country.pais]}"></span> ${country.pais}</h3>
                ${statusBadge}
            </div>
            <div class="comparison-card-directa">${directa}</div>`;
        
        if (ampliada) {
            html += `<div class="comparison-card-ampliada" id="${detailId}">${ampliada}</div>
                <div class="comparison-card-footer">
                    <button class="expand-info-button" data-target="${detailId}">Ampliar información</button>
                </div>`;
        }
        
        html += `</div>`;
    });
    
    html += `</div></div>`;
    
    mainContent.innerHTML = html;
    document.getElementById('sidebar-nav').style.display = 'none';
    document.getElementById('results-section').classList.add('show');
}

// Search by Filter
async function searchByFilter() {
    const checkedInputs = document.querySelectorAll('#filter-checkbox-container input:checked');
    if (checkedInputs.length === 0) {
        return alert('Por favor, seleccione al menos un criterio para filtrar.');
    }
    
    showLoading();
    
    const selectedCriteria = Array.from(checkedInputs).map(input => ({
        code: input.value,
        text: canonicalQuestions[input.value]
    }));
    
    try {
        let query = supabaseClient.from('faq').select('pais');
        
        selectedCriteria.forEach(criterion => {
            query = query.eq(`q_${criterion.code.replace(/\./g, '_')}_booleano`, true);
        });
        
        const { data: countries, error } = await query;
        
        if (error) throw error;
        
        displayFilteredCountries(countries, selectedCriteria);
    } catch (error) {
        showError(`Ocurrió un error al realizar el filtro.`);
    }
}

function displayFilteredCountries(countries, criteria) {
    const mainContent = document.getElementById('main-results-content');
    
    let html = `<div class="results-content-inner">
        <h2 style="color: var(--primary-blue); margin-bottom: 2rem;">Resultados del Filtro Avanzado</h2>
        <div style="background: var(--neutral-50); padding: 20px; border-radius: 12px; margin-bottom: 24px;">
            <h4 style="margin-bottom: 12px;">Países que cumplen con TODOS los siguientes criterios:</h4>
            <ul style="list-style-type: none; padding-left: 0;">`;
    
    criteria.forEach(c => {
        html += `<li><i class="fas fa-check-circle" style="color: var(--primary-green); margin-right: 8px;"></i>${c.text}</li>`;
    });
    
    html += `</ul></div>`;
    
    if (countries.length > 0) {
        html += `<div id="filtered-countries-grid">`;
        
        countries.forEach(country => {
            html += `<div class="filtered-country-card">
                <div>
                    <div class="fi-container"><span class="${countryFlags[country.pais]}"></span></div>
                    <h4 class="country-title">${country.pais}</h4>
                </div>
                <button class="view-full-country-info-btn" data-country="${country.pais}">
                    <i class="fas fa-file-alt"></i> Ver Ficha Completa
                </button>
            </div>`;
        });
        
        html += `</div>`;
    } else {
        html += `<div class="error" style="background: rgba(251, 191, 36, 0.1); color: #d97706; border-left-color: #f59e0b;">
            No se encontraron países que cumplan con todos los criterios seleccionados.
        </div>`;
    }
    
    html += `</div>`;
    
    mainContent.innerHTML = html;
    document.getElementById('sidebar-nav').style.display = 'none';
    document.getElementById('results-section').classList.add('show');
}

// Populate Dropdowns and Filters
function populateRequirementDropdown() {
    const select = document.getElementById('requirement-select');
    
    categories.forEach(category => {
        if (category.id === 7) return;
        
        const optgroup = document.createElement('optgroup');
        optgroup.label = category.name;
        
        Object.keys(canonicalQuestions)
            .filter(q => q.startsWith(category.id + '.'))
            .forEach(qCode => {
                const option = document.createElement('option');
                option.value = qCode;
                option.textContent = `${qCode} - ${canonicalQuestions[qCode]}`;
                optgroup.appendChild(option);
            });
        
        select.appendChild(optgroup);
    });
}

function populateFilterCheckboxes() {
    const container = document.getElementById('filter-checkbox-container');
    let html = '';
    
    categories.forEach(category => {
        if (category.id === 7) return;
        
        const booleanQuestions = Object.keys(canonicalQuestions)
            .filter(q => q.startsWith(category.id + '.') && !noBooleanQuestions.includes(q));
        
        if (booleanQuestions.length > 0) {
            html += `<div class="filter-category">
                <div class="filter-category-title">
                    <span>${category.name}</span>
                    <i class="fas fa-chevron-right indicator-icon"></i>
                </div>
                <div class="filter-items-list">`;
            
            booleanQuestions.forEach(qCode => {
                html += `<span class="filter-item">
                    <label>
                        <input type="checkbox" value="${qCode}">
                        ${qCode} - ${canonicalQuestions[qCode]}
                    </label>
                </span>`;
            });
            
            html += `</div></div>`;
        }
    });
    
    container.innerHTML = html;
}

function clearFilters() {
    const checkboxes = document.querySelectorAll('#filter-checkbox-container input[type="checkbox"]');
    checkboxes.forEach(checkbox => { checkbox.checked = false; });
    document.getElementById('results-section').classList.remove('show');
    document.getElementById('main-results-content').innerHTML = '';
}

// UI Helper Functions
function showLoading() {
    const mainContent = document.getElementById('main-results-content');
    const sidebarNav = document.getElementById('sidebar-nav');
    
    mainContent.innerHTML = `<div class="loading">
        <i class="fas fa-spinner fa-spin" style="font-size: 2rem;"></i>
        <p>Cargando...</p>
    </div>`;
    
    sidebarNav.style.display = 'none';
    document.getElementById('results-section').classList.add('show');
}

function showError(message) {
    document.getElementById('main-results-content').innerHTML = `
        <div class="error">
            <i class="fas fa-exclamation-triangle"></i> ${message}
        </div>`;
    document.getElementById('sidebar-nav').style.display = 'none';
    document.getElementById('results-section').classList.add('show');
}

// Scroll Functionality
const backToTopButton = document.getElementById("back-to-top-btn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

function scrollToSearch() {
    const searchSection = document.querySelector('.search-section');
    if (searchSection) {
        searchSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Print Report Function
async function printReport() {
    const countryName = document.querySelector('.country-name').textContent;
    const originalTitle = document.title;
    
    // Register download in Supabase
    try {
        const { error } = await supabaseClient
            .from('descargas_informes')
            .insert({ pais: countryName });

        if (error) {
            console.error('Error al registrar la descarga en Supabase:', error.message);
        } else {
            console.log(`Descarga de ${countryName} registrada con éxito.`);
        }
    } catch (e) {
        console.error('Excepción al intentar registrar la descarga:', e);
    }
    
    // Change title for PDF filename
    document.title = `IRENLyC - Informe Regulatorio ${countryName}`;

    // Print
    window.print();

    // Restore original title
    setTimeout(() => {
        document.title = originalTitle;
    }, 500);
}