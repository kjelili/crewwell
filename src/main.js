import './style.css';

const STORAGE_KEY = 'crewwell.checkins.v1';
const LOCALE_KEY = 'crewwell.locale.v1';

const SUPPORTED_LOCALES = [
  { id: 'en', label: 'English' },
  { id: 'es', label: 'Espanol' },
  { id: 'fr', label: 'Francais' },
];

const COPY = {
  en: {
    appEyebrow: 'CrewWell · Site Operations Wellness',
    appTitle: 'Daily workforce pulse and safety readiness, built for real crews.',
    appCopy:
      'Capture short check-ins, detect fatigue and stress trends, and give supervisors practical recommendations before small issues become incidents.',
    startCheckIn: 'Start Check-In',
    viewDashboard: 'View Dashboard',
    workerCheckIn: 'Worker Check-In',
    checkInSubtitle: 'Mobile-first, 60-second form. Submit anonymously or by name.',
    submissionType: 'Submission Type',
    anonymous: 'Anonymous',
    workerName: 'Worker Name',
    workerNamePlaceholder: 'e.g. A. Johnson',
    crew: 'Crew',
    selectCrew: 'Select crew',
    site: 'Site',
    selectSite: 'Select site',
    stressLabel: 'Stress Level (1 low · 5 high)',
    fatigueLabel: 'Fatigue Level (1 low · 5 high)',
    safetyReadyQuestion: 'Safety Ready Today?',
    incidentQuestion: 'Near-miss or incident in last 24h?',
    yes: 'Yes',
    no: 'No',
    notes: 'Notes (optional)',
    notesPlaceholder: 'Any blockers, support needed, or concerns?',
    submitCheckIn: 'Submit Check-In',
    resetData: 'Reset Demo Data',
    dashboardTitle: 'Crew Dashboard',
    dashboardSubtitle: 'Track trends by crew and site to act quickly and confidently.',
    timeWindow: 'Time Window',
    allTime: 'All time',
    last7: 'Last 7 days',
    last14: 'Last 14 days',
    last30: 'Last 30 days',
    trendAlerts: 'Trend Alerts',
    managerRecommendations: 'Manager Recommendations',
    supervisorNudges: 'Supervisor Nudges',
    incidentCorrelation: 'Incident Correlation',
    wellnessReferrals: 'Wellness Referrals',
    recentCheckIns: 'Recent Check-Ins',
    time: 'Time',
    identity: 'Identity',
    stress: 'Stress',
    fatigue: 'Fatigue',
    safety: 'Safety',
    incident: 'Incident',
    ready: 'Ready',
    notReady: 'Not Ready',
    recorded: 'Recorded',
    none: 'None',
    allCrews: 'All crews',
    allSites: 'All sites',
    totalCheckIns: 'Total Check-Ins',
    avgStress: 'Avg Stress',
    avgFatigue: 'Avg Fatigue',
    safetyReadyRate: 'Safety Ready',
    highRiskEntries: 'High-Risk Entries',
    incidentFlags: 'Incident Flags',
    statusRequiredFields: 'Please complete all required fields.',
    statusSaved: 'Check-in captured successfully.',
    statusReset: 'Demo data reset completed.',
    emptyCheckins: 'No check-ins available yet.',
    emptyTable: 'No data yet. Submit the first check-in above.',
    noCriticalAlerts: 'No critical trend alerts right now. Continue daily monitoring.',
    alertStressRise: 'Stress trend is rising sharply in the latest cycle.',
    alertFatigueRise: 'Fatigue trend is rising and may impact shift performance.',
    alertSafetyNo: 'At least one recent check-in flagged not safety-ready.',
    recoStress: 'Run a short supervisor huddle and rebalance high-pressure tasks.',
    recoFatigue: 'Stagger breaks and assign lower-risk activities for fatigued crews.',
    recoSafety: 'Conduct immediate readiness follow-up with flagged workers.',
    recoParticipation: 'Increase check-in participation to improve trend reliability.',
    recoMaintain: 'Maintain current plan and keep daily pulse check-ins active.',
    nudgeRapid:
      'Trigger a 10-minute supervisor walkthrough this shift to check workload and team strain.',
    nudgeIncident:
      'Schedule an end-of-shift safety debrief to connect incident signals with current fatigue levels.',
    nudgeTrust:
      'High anonymous usage detected. Reinforce psychological safety and non-punitive reporting.',
    nudgeCoverage:
      'Participation is low for confident trend analysis. Remind crew leads before shift start.',
    nudgeSteady: 'Nudges are stable for now. Keep monitoring and sustain current routines.',
    incidentNoSignals:
      'No incident-linked check-ins yet. Correlation insights will appear as incident flags are reported.',
    incidentHigherRisk:
      'High-risk rate is {diff}% higher when incidents are reported ({withRate}% vs {withoutRate}%).',
    incidentLowerRisk:
      'High-risk rate is {diff}% lower when incidents are reported ({withRate}% vs {withoutRate}%).',
    incidentNeutral:
      'Incident and non-incident check-ins show similar high-risk rates ({withRate}% vs {withoutRate}%).',
    referralEap:
      'Employee Assistance referral: prioritize stress support resources for crews above baseline.',
    referralFatigue:
      'Fatigue support referral: activate rest-and-rotation guidance for high fatigue signals.',
    referralSafety:
      'Safety coaching referral: assign follow-up for workers marking not safety-ready or incident-exposed.',
    referralPreventive:
      'Preventive wellness referral: continue monthly resilience talks and hydration/rest reminders.',
    enhancedTitle: 'Enhanced v2 Capabilities Enabled',
    noReferrals: 'No immediate referrals required.',
  },
  es: {
    appEyebrow: 'CrewWell · Bienestar en Operaciones',
    appTitle: 'Pulso diario del equipo y preparacion de seguridad para cuadrillas reales.',
    appCopy:
      'Capture registros breves, detecte tendencias de fatiga y estres, y entregue recomendaciones practicas a supervisores.',
    startCheckIn: 'Iniciar Registro',
    viewDashboard: 'Ver Panel',
    workerCheckIn: 'Registro del Trabajador',
    checkInSubtitle: 'Formulario movil de 60 segundos. Envio anonimo o con nombre.',
    submissionType: 'Tipo de Envio',
    anonymous: 'Anonimo',
    workerName: 'Nombre del Trabajador',
    workerNamePlaceholder: 'ej. A. Johnson',
    crew: 'Cuadrilla',
    selectCrew: 'Seleccione cuadrilla',
    site: 'Sitio',
    selectSite: 'Seleccione sitio',
    stressLabel: 'Nivel de Estres (1 bajo · 5 alto)',
    fatigueLabel: 'Nivel de Fatiga (1 bajo · 5 alto)',
    safetyReadyQuestion: 'Listo para trabajar seguro hoy?',
    incidentQuestion: 'Hubo casi incidente o incidente en 24h?',
    yes: 'Si',
    no: 'No',
    notes: 'Notas (opcional)',
    notesPlaceholder: 'Bloqueos, apoyo necesario o preocupaciones?',
    submitCheckIn: 'Enviar Registro',
    resetData: 'Reiniciar Datos Demo',
    dashboardTitle: 'Panel de Cuadrillas',
    dashboardSubtitle: 'Siga tendencias por cuadrilla y sitio para actuar rapido.',
    timeWindow: 'Ventana de Tiempo',
    allTime: 'Todo el tiempo',
    last7: 'Ultimos 7 dias',
    last14: 'Ultimos 14 dias',
    last30: 'Ultimos 30 dias',
    trendAlerts: 'Alertas de Tendencia',
    managerRecommendations: 'Recomendaciones para Gerencia',
    supervisorNudges: 'Impulsos al Supervisor',
    incidentCorrelation: 'Correlacion de Incidentes',
    wellnessReferrals: 'Derivaciones de Bienestar',
    recentCheckIns: 'Registros Recientes',
    time: 'Hora',
    identity: 'Identidad',
    stress: 'Estres',
    fatigue: 'Fatiga',
    safety: 'Seguridad',
    incident: 'Incidente',
    ready: 'Listo',
    notReady: 'No Listo',
    recorded: 'Registrado',
    none: 'Ninguno',
    allCrews: 'Todas las cuadrillas',
    allSites: 'Todos los sitios',
    totalCheckIns: 'Registros Totales',
    avgStress: 'Estres Prom.',
    avgFatigue: 'Fatiga Prom.',
    safetyReadyRate: 'Listos en Seguridad',
    highRiskEntries: 'Entradas de Alto Riesgo',
    incidentFlags: 'Banderas de Incidente',
    statusRequiredFields: 'Complete los campos obligatorios.',
    statusSaved: 'Registro guardado con exito.',
    statusReset: 'Datos demo reiniciados.',
    emptyCheckins: 'Aun no hay registros.',
    emptyTable: 'Sin datos aun. Envie el primer registro arriba.',
    noCriticalAlerts: 'Sin alertas criticas por ahora. Mantenga monitoreo diario.',
    alertStressRise: 'La tendencia de estres esta subiendo rapidamente.',
    alertFatigueRise: 'La fatiga esta subiendo y puede afectar el rendimiento.',
    alertSafetyNo: 'Al menos un registro reciente marco no listo en seguridad.',
    recoStress: 'Realice una reunion corta y rebalancee tareas de alta presion.',
    recoFatigue: 'Escalone pausas y asigne actividades de menor riesgo.',
    recoSafety: 'Haga seguimiento inmediato con trabajadores marcados.',
    recoParticipation: 'Aumente participacion para mejorar confiabilidad de tendencias.',
    recoMaintain: 'Mantenga el plan actual y continue con registros diarios.',
    nudgeRapid: 'Active una caminata de supervisor de 10 minutos en este turno.',
    nudgeIncident: 'Programe un cierre de turno para revisar incidentes y fatiga.',
    nudgeTrust: 'Uso anonimo alto detectado. Refuerce un entorno sin represalias.',
    nudgeCoverage: 'Participacion baja para analisis confiable. Recuerde al inicio de turno.',
    nudgeSteady: 'Impulsos estables por ahora. Mantenga el monitoreo.',
    incidentNoSignals: 'Aun no hay registros con incidente para analizar correlacion.',
    incidentHigherRisk:
      'La tasa de alto riesgo es {diff}% mayor con incidentes ({withRate}% vs {withoutRate}%).',
    incidentLowerRisk:
      'La tasa de alto riesgo es {diff}% menor con incidentes ({withRate}% vs {withoutRate}%).',
    incidentNeutral:
      'Los grupos con y sin incidente muestran tasas similares ({withRate}% vs {withoutRate}%).',
    referralEap:
      'Derivacion de apoyo emocional: priorice recursos para cuadrillas con estres alto.',
    referralFatigue:
      'Derivacion por fatiga: active guias de descanso y rotacion para cuadrillas afectadas.',
    referralSafety:
      'Derivacion de coaching de seguridad para personas no listas o expuestas a incidentes.',
    referralPreventive:
      'Derivacion preventiva: mantenga charlas mensuales de resiliencia y recordatorios de descanso.',
    enhancedTitle: 'Capacidades v2 Mejoradas Habilitadas',
    noReferrals: 'No se requieren derivaciones inmediatas.',
  },
  fr: {
    appEyebrow: 'CrewWell · Bien-etre des Operations',
    appTitle: "Pulse quotidien des equipes et preparation securite pour les chantiers.",
    appCopy:
      "Capturez des check-ins rapides, detectez les tendances de fatigue et de stress, puis guidez les superviseurs avec des actions pratiques.",
    startCheckIn: 'Demarrer Check-In',
    viewDashboard: 'Voir Tableau de Bord',
    workerCheckIn: 'Check-In Ouvrier',
    checkInSubtitle: 'Formulaire mobile de 60 secondes. Envoi anonyme ou nominatif.',
    submissionType: "Type d'Envoi",
    anonymous: 'Anonyme',
    workerName: "Nom de l'Ouvrier",
    workerNamePlaceholder: 'ex. A. Johnson',
    crew: 'Equipe',
    selectCrew: "Selectionner l'equipe",
    site: 'Site',
    selectSite: 'Selectionner le site',
    stressLabel: 'Niveau de Stress (1 bas · 5 eleve)',
    fatigueLabel: 'Niveau de Fatigue (1 bas · 5 eleve)',
    safetyReadyQuestion: "Pret pour la securite aujourd'hui ?",
    incidentQuestion: 'Presque-incident ou incident dans les 24h ?',
    yes: 'Oui',
    no: 'Non',
    notes: 'Notes (optionnel)',
    notesPlaceholder: 'Blocages, aide necessaire ou preoccupations ?',
    submitCheckIn: 'Soumettre Check-In',
    resetData: 'Reinitialiser Demo',
    dashboardTitle: "Tableau d'Equipe",
    dashboardSubtitle: 'Suivez les tendances par equipe et site pour agir vite.',
    timeWindow: 'Fenetre Temporelle',
    allTime: 'Tout le temps',
    last7: '7 derniers jours',
    last14: '14 derniers jours',
    last30: '30 derniers jours',
    trendAlerts: 'Alertes de Tendance',
    managerRecommendations: 'Recommandations Manager',
    supervisorNudges: 'Nudges Superviseur',
    incidentCorrelation: 'Correlation Incident',
    wellnessReferrals: 'Orientations Bien-etre',
    recentCheckIns: 'Check-Ins Recents',
    time: 'Heure',
    identity: 'Identite',
    stress: 'Stress',
    fatigue: 'Fatigue',
    safety: 'Securite',
    incident: 'Incident',
    ready: 'Pret',
    notReady: 'Non Pret',
    recorded: 'Declare',
    none: 'Aucun',
    allCrews: 'Toutes les equipes',
    allSites: 'Tous les sites',
    totalCheckIns: 'Total Check-Ins',
    avgStress: 'Stress Moy.',
    avgFatigue: 'Fatigue Moy.',
    safetyReadyRate: 'Pret Securite',
    highRiskEntries: 'Entrees Haut Risque',
    incidentFlags: 'Signaux Incident',
    statusRequiredFields: 'Veuillez completer les champs requis.',
    statusSaved: 'Check-in enregistre avec succes.',
    statusReset: 'Donnees demo reinitialisees.',
    emptyCheckins: 'Aucun check-in pour le moment.',
    emptyTable: "Aucune donnee. Soumettez le premier check-in ci-dessus.",
    noCriticalAlerts: "Aucune alerte critique. Continuez le suivi quotidien.",
    alertStressRise: 'La tendance de stress augmente fortement.',
    alertFatigueRise: 'La fatigue augmente et peut impacter la performance.',
    alertSafetyNo: 'Au moins un check-in recent est non pret securite.',
    recoStress: 'Faites un bref point superviseur et reequilibrez les taches sous pression.',
    recoFatigue: 'Echelonnez les pauses et attribuez des activites a moindre risque.',
    recoSafety: 'Lancez un suivi immediat avec les travailleurs signales.',
    recoParticipation: 'Augmentez la participation pour fiabiliser les tendances.',
    recoMaintain: 'Maintenez le plan actuel et conservez le check-in quotidien.',
    nudgeRapid: 'Declenchez une ronde superviseur de 10 minutes sur ce shift.',
    nudgeIncident: 'Planifiez un debrief securite de fin de shift.',
    nudgeTrust: 'Usage anonyme eleve. Renforcez la securite psychologique.',
    nudgeCoverage: 'Participation faible. Rappel aux chefs avant le debut de shift.',
    nudgeSteady: 'Nudges stables pour le moment. Poursuivez le suivi.',
    incidentNoSignals: "Aucun signal incident pour l'instant, correlation a venir.",
    incidentHigherRisk:
      'Le taux haut risque est {diff}% plus eleve avec incident ({withRate}% vs {withoutRate}%).',
    incidentLowerRisk:
      'Le taux haut risque est {diff}% plus bas avec incident ({withRate}% vs {withoutRate}%).',
    incidentNeutral:
      'Taux haut risque similaires avec et sans incident ({withRate}% vs {withoutRate}%).',
    referralEap:
      'Orientation soutien psychologique: prioriser les equipes au-dessus du seuil de stress.',
    referralFatigue:
      'Orientation fatigue: activer les guides pause-rotation pour les equipes fatiguees.',
    referralSafety:
      'Orientation coaching securite pour les personnes non pretes ou exposees incident.',
    referralPreventive:
      'Orientation preventive: maintenir ateliers de resilience et rappels hydratation/repos.',
    enhancedTitle: 'Capacites v2 Activees',
    noReferrals: 'Aucune orientation immediate requise.',
  },
};

const state = {
  checkins: loadCheckins(),
  filters: {
    crew: 'all',
    site: 'all',
    window: 'all',
  },
  locale: loadLocale(),
};

const app = document.querySelector('#app');
renderApp();

function renderApp() {
  app.innerHTML = renderLayout();
  wireUpLocale();
  wireUpForm();
  wireUpFilters();
  refreshDashboard();
}

function renderLayout() {
  const localeOptions = SUPPORTED_LOCALES.map(
    (item) => `<option value="${item.id}" ${state.locale === item.id ? 'selected' : ''}>${item.label}</option>`,
  ).join('');

  return `
    <main class="page">
      <header class="hero">
        <div class="hero-top">
          <p class="eyebrow">${t('appEyebrow')}</p>
          <label class="locale-control">
            <span>Language</span>
            <select id="locale-select" aria-label="Language selector">${localeOptions}</select>
          </label>
        </div>
        <h1 class="hero-title">${t('appTitle')}</h1>
        <p class="hero-copy">
          ${t('appCopy')}
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#checkin">${t('startCheckIn')}</a>
          <a class="btn btn-secondary" href="#dashboard">${t('viewDashboard')}</a>
        </div>
      </header>

      <section id="checkin" class="panel">
        <div class="panel-title-wrap">
          <h2>${t('workerCheckIn')}</h2>
          <p>${t('checkInSubtitle')}</p>
        </div>
        <form id="checkin-form" class="form-grid">
          <label class="field switch-field">
            <span>${t('submissionType')}</span>
            <span class="switch-wrap">
              <input id="anonymous-toggle" type="checkbox" />
              <span>${t('anonymous')}</span>
            </span>
          </label>
          <label class="field">
            <span>${t('workerName')}</span>
            <input id="worker-name" name="workerName" type="text" placeholder="${t('workerNamePlaceholder')}" />
          </label>
          <label class="field">
            <span>${t('crew')}</span>
            <select id="crew" name="crew" required>
              <option value="">${t('selectCrew')}</option>
              <option value="Steel">Steel</option>
              <option value="Concrete">Concrete</option>
              <option value="Electrical">Electrical</option>
              <option value="Logistics">Logistics</option>
            </select>
          </label>
          <label class="field">
            <span>${t('site')}</span>
            <select id="site" name="site" required>
              <option value="">${t('selectSite')}</option>
              <option value="North Yard">North Yard</option>
              <option value="Tower A">Tower A</option>
              <option value="West Access">West Access</option>
              <option value="Plant Room">Plant Room</option>
            </select>
          </label>
          <label class="field">
            <span>${t('stressLabel')}</span>
            <input id="stress" name="stress" type="range" min="1" max="5" value="2" />
          </label>
          <label class="field">
            <span>${t('fatigueLabel')}</span>
            <input id="fatigue" name="fatigue" type="range" min="1" max="5" value="2" />
          </label>
          <fieldset class="field">
            <legend>${t('safetyReadyQuestion')}</legend>
            <div class="radio-group">
              <label><input type="radio" name="safetyReady" value="yes" checked /> ${t('yes')}</label>
              <label><input type="radio" name="safetyReady" value="no" /> ${t('no')}</label>
            </div>
          </fieldset>
          <fieldset class="field">
            <legend>${t('incidentQuestion')}</legend>
            <div class="radio-group">
              <label><input type="radio" name="incidentRecent" value="no" checked /> ${t('no')}</label>
              <label><input type="radio" name="incidentRecent" value="yes" /> ${t('yes')}</label>
            </div>
          </fieldset>
          <label class="field field-full">
            <span>${t('notes')}</span>
            <textarea id="notes" name="notes" rows="3" maxlength="280" placeholder="${t('notesPlaceholder')}"></textarea>
          </label>
          <div class="field-full actions-row">
            <button class="btn btn-primary" type="submit">${t('submitCheckIn')}</button>
            <button id="reset-data" class="btn btn-danger" type="button">${t('resetData')}</button>
          </div>
          <p id="status-message" class="status-message" aria-live="polite"></p>
        </form>
      </section>

      <section id="dashboard" class="panel">
        <div class="panel-title-wrap">
          <h2>${t('dashboardTitle')}</h2>
          <p>${t('dashboardSubtitle')}</p>
        </div>
        <div class="filters">
          <label>
            ${t('crew')}
            <select id="filter-crew"></select>
          </label>
          <label>
            ${t('site')}
            <select id="filter-site"></select>
          </label>
          <label>
            ${t('timeWindow')}
            <select id="filter-window">
              <option value="all">${t('allTime')}</option>
              <option value="7">${t('last7')}</option>
              <option value="14">${t('last14')}</option>
              <option value="30">${t('last30')}</option>
            </select>
          </label>
        </div>

        <div id="stats" class="stats-grid"></div>
        <div class="dashboard-grid">
          <article class="card">
            <h3>${t('trendAlerts')}</h3>
            <ul id="alerts-list" class="list"></ul>
          </article>
          <article class="card">
            <h3>${t('managerRecommendations')}</h3>
            <ul id="reco-list" class="list"></ul>
          </article>
          <article class="card">
            <h3>${t('supervisorNudges')}</h3>
            <ul id="nudge-list" class="list"></ul>
          </article>
          <article class="card">
            <h3>${t('incidentCorrelation')}</h3>
            <p id="incident-correlation" class="insight-text"></p>
          </article>
          <article class="card card-full">
            <h3>${t('wellnessReferrals')}</h3>
            <ul id="referral-list" class="list"></ul>
          </article>
        </div>
        <article class="card">
          <h3>${t('recentCheckIns')}</h3>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>${t('time')}</th>
                  <th>${t('crew')}</th>
                  <th>${t('site')}</th>
                  <th>${t('identity')}</th>
                  <th>${t('stress')}</th>
                  <th>${t('fatigue')}</th>
                  <th>${t('safety')}</th>
                  <th>${t('incident')}</th>
                </tr>
              </thead>
              <tbody id="checkins-table"></tbody>
            </table>
          </div>
        </article>
      </section>

      <section class="panel roadmap">
        <h2>${t('enhancedTitle')}</h2>
        <div class="chips">
          <span class="chip">Multilingual check-ins</span>
          <span class="chip">${t('supervisorNudges')}</span>
          <span class="chip">${t('incidentCorrelation')}</span>
          <span class="chip">${t('wellnessReferrals')}</span>
        </div>
      </section>
    </main>
  `;
}

function wireUpLocale() {
  const localeSelect = document.querySelector('#locale-select');
  localeSelect.addEventListener('change', (event) => {
    const value = String(event.target.value || 'en');
    state.locale = COPY[value] ? value : 'en';
    persistLocale(state.locale);
    renderApp();
  });
}

function wireUpForm() {
  const form = document.querySelector('#checkin-form');
  const anonymousToggle = document.querySelector('#anonymous-toggle');
  const workerNameInput = document.querySelector('#worker-name');
  const resetButton = document.querySelector('#reset-data');

  anonymousToggle.addEventListener('change', () => {
    workerNameInput.disabled = anonymousToggle.checked;
    workerNameInput.required = !anonymousToggle.checked;
    if (anonymousToggle.checked) {
      workerNameInput.value = '';
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const anonymous = anonymousToggle.checked;
    const checkin = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      workerName: anonymous ? 'Anonymous' : String(formData.get('workerName') || '').trim(),
      anonymous,
      crew: String(formData.get('crew') || ''),
      site: String(formData.get('site') || ''),
      stress: Number(formData.get('stress') || 1),
      fatigue: Number(formData.get('fatigue') || 1),
      safetyReady: String(formData.get('safetyReady') || 'yes'),
      incidentRecent: String(formData.get('incidentRecent') || 'no'),
      notes: String(formData.get('notes') || '').trim(),
    };

    if (!checkin.crew || !checkin.site || (!anonymous && !checkin.workerName)) {
      setStatus(t('statusRequiredFields'), 'error');
      return;
    }

    state.checkins.unshift(checkin);
    persistCheckins(state.checkins);
    form.reset();
    anonymousToggle.checked = false;
    workerNameInput.disabled = false;
    workerNameInput.required = false;
    document.querySelector('#stress').value = '2';
    document.querySelector('#fatigue').value = '2';
    setStatus(t('statusSaved'), 'success');
    refreshDashboard();
  });

  resetButton.addEventListener('click', () => {
    state.checkins = seedCheckins();
    persistCheckins(state.checkins);
    setStatus(t('statusReset'), 'success');
    refreshDashboard();
  });
}

function wireUpFilters() {
  document.querySelector('#filter-crew').addEventListener('change', (event) => {
    state.filters.crew = event.target.value;
    refreshDashboard();
  });
  document.querySelector('#filter-site').addEventListener('change', (event) => {
    state.filters.site = event.target.value;
    refreshDashboard();
  });
  document.querySelector('#filter-window').addEventListener('change', (event) => {
    state.filters.window = event.target.value;
    refreshDashboard();
  });
}

function refreshDashboard() {
  const filtered = getFilteredCheckins();
  populateFilterOptions();
  renderStats(filtered);
  renderAlerts(filtered);
  renderRecommendations(filtered);
  renderSupervisorNudges(filtered);
  renderIncidentCorrelation(filtered);
  renderReferrals(filtered);
  renderTable(filtered);
}

function populateFilterOptions() {
  const crewSelect = document.querySelector('#filter-crew');
  const siteSelect = document.querySelector('#filter-site');
  const crews = [...new Set(state.checkins.map((item) => item.crew))].sort();
  const sites = [...new Set(state.checkins.map((item) => item.site))].sort();
  crewSelect.innerHTML = `<option value="all">${t('allCrews')}</option>${crews.map((crew) => `<option value="${crew}">${crew}</option>`).join('')}`;
  siteSelect.innerHTML = `<option value="all">${t('allSites')}</option>${sites.map((site) => `<option value="${site}">${site}</option>`).join('')}`;
  crewSelect.value = state.filters.crew;
  siteSelect.value = state.filters.site;
  document.querySelector('#filter-window').value = state.filters.window;
}

function getFilteredCheckins() {
  const now = Date.now();
  const days = Number(state.filters.window);
  const minTime = Number.isFinite(days) && days > 0 ? now - days * 24 * 60 * 60 * 1000 : null;

  return state.checkins.filter((item) => {
    const matchesCrew = state.filters.crew === 'all' || item.crew === state.filters.crew;
    const matchesSite = state.filters.site === 'all' || item.site === state.filters.site;
    const matchesWindow = minTime === null || new Date(item.timestamp).getTime() >= minTime;
    return matchesCrew && matchesSite && matchesWindow;
  });
}

function renderStats(checkins) {
  const avgStress = average(checkins.map((item) => item.stress));
  const avgFatigue = average(checkins.map((item) => item.fatigue));
  const highRiskCount = checkins.filter((item) => item.stress >= 4 || item.fatigue >= 4 || item.safetyReady === 'no').length;
  const readinessRate = checkins.length === 0 ? 0 : Math.round((checkins.filter((item) => item.safetyReady === 'yes').length / checkins.length) * 100);
  const incidentCount = checkins.filter((item) => item.incidentRecent === 'yes').length;

  const stats = [
    { label: t('totalCheckIns'), value: checkins.length.toString() },
    { label: t('avgStress'), value: avgStress.toFixed(1) },
    { label: t('avgFatigue'), value: avgFatigue.toFixed(1) },
    { label: t('safetyReadyRate'), value: `${readinessRate}%` },
    { label: t('highRiskEntries'), value: highRiskCount.toString() },
    { label: t('incidentFlags'), value: incidentCount.toString() },
  ];

  document.querySelector('#stats').innerHTML = stats
    .map(
      (stat) => `
        <article class="stat-card">
          <p>${stat.label}</p>
          <strong>${stat.value}</strong>
        </article>
      `,
    )
    .join('');
}

function renderAlerts(checkins) {
  const list = document.querySelector('#alerts-list');
  if (checkins.length === 0) {
    list.innerHTML = `<li>${t('emptyCheckins')}</li>`;
    return;
  }

  const sorted = [...checkins].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  const latest = sorted.slice(0, 3);
  const previous = sorted.slice(3, 6);
  const latestStress = average(latest.map((item) => item.stress));
  const previousStress = average(previous.map((item) => item.stress));
  const latestFatigue = average(latest.map((item) => item.fatigue));
  const previousFatigue = average(previous.map((item) => item.fatigue));
  const safetyNo = latest.filter((item) => item.safetyReady === 'no').length;

  const alerts = [];
  if (previous.length > 0 && latestStress - previousStress >= 0.8) {
    alerts.push(t('alertStressRise'));
  }
  if (previous.length > 0 && latestFatigue - previousFatigue >= 0.8) {
    alerts.push(t('alertFatigueRise'));
  }
  if (safetyNo >= 1) {
    alerts.push(t('alertSafetyNo'));
  }
  if (alerts.length === 0) {
    alerts.push(t('noCriticalAlerts'));
  }

  list.innerHTML = alerts.map((alert) => `<li>${alert}</li>`).join('');
}

function renderRecommendations(checkins) {
  const avgStress = average(checkins.map((item) => item.stress));
  const avgFatigue = average(checkins.map((item) => item.fatigue));
  const safetyNo = checkins.filter((item) => item.safetyReady === 'no').length;
  const recos = [];

  if (avgStress >= 3.5) {
    recos.push(t('recoStress'));
  }
  if (avgFatigue >= 3.5) {
    recos.push(t('recoFatigue'));
  }
  if (safetyNo > 0) {
    recos.push(t('recoSafety'));
  }
  if (checkins.length < 5) {
    recos.push(t('recoParticipation'));
  }
  if (recos.length === 0) {
    recos.push(t('recoMaintain'));
  }

  document.querySelector('#reco-list').innerHTML = recos.map((reco) => `<li>${reco}</li>`).join('');
}

function renderSupervisorNudges(checkins) {
  const list = document.querySelector('#nudge-list');
  if (checkins.length === 0) {
    list.innerHTML = `<li>${t('emptyCheckins')}</li>`;
    return;
  }

  const highRisk = checkins.filter((item) => isHighRisk(item)).length;
  const incidentFlags = checkins.filter((item) => item.incidentRecent === 'yes').length;
  const anonymousRate = checkins.filter((item) => item.anonymous).length / checkins.length;
  const nudges = [];

  if (highRisk >= 2) {
    nudges.push(t('nudgeRapid'));
  }
  if (incidentFlags >= 1) {
    nudges.push(t('nudgeIncident'));
  }
  if (anonymousRate >= 0.6) {
    nudges.push(t('nudgeTrust'));
  }
  if (checkins.length < 8) {
    nudges.push(t('nudgeCoverage'));
  }
  if (nudges.length === 0) {
    nudges.push(t('nudgeSteady'));
  }

  list.innerHTML = nudges.map((item) => `<li>${item}</li>`).join('');
}

function renderIncidentCorrelation(checkins) {
  const target = document.querySelector('#incident-correlation');
  if (checkins.length === 0) {
    target.textContent = t('emptyCheckins');
    return;
  }

  const withIncident = checkins.filter((item) => item.incidentRecent === 'yes');
  const withoutIncident = checkins.filter((item) => item.incidentRecent !== 'yes');

  if (withIncident.length === 0) {
    target.textContent = t('incidentNoSignals');
    return;
  }

  const withRate = percentage(withIncident.filter((item) => isHighRisk(item)).length, withIncident.length);
  const withoutRate = percentage(withoutIncident.filter((item) => isHighRisk(item)).length, withoutIncident.length || 1);
  const delta = Math.round(withRate - withoutRate);

  if (delta >= 10) {
    target.textContent = formatCopy('incidentHigherRisk', {
      diff: String(Math.abs(delta)),
      withRate: String(withRate),
      withoutRate: String(withoutRate),
    });
    return;
  }

  if (delta <= -10) {
    target.textContent = formatCopy('incidentLowerRisk', {
      diff: String(Math.abs(delta)),
      withRate: String(withRate),
      withoutRate: String(withoutRate),
    });
    return;
  }

  target.textContent = formatCopy('incidentNeutral', {
    withRate: String(withRate),
    withoutRate: String(withoutRate),
  });
}

function renderReferrals(checkins) {
  const list = document.querySelector('#referral-list');
  if (checkins.length === 0) {
    list.innerHTML = `<li>${t('noReferrals')}</li>`;
    return;
  }

  const avgStress = average(checkins.map((item) => item.stress));
  const avgFatigue = average(checkins.map((item) => item.fatigue));
  const incidentCount = checkins.filter((item) => item.incidentRecent === 'yes').length;
  const noSafetyCount = checkins.filter((item) => item.safetyReady === 'no').length;
  const referrals = [];

  if (avgStress >= 3.5) {
    referrals.push(t('referralEap'));
  }
  if (avgFatigue >= 3.5) {
    referrals.push(t('referralFatigue'));
  }
  if (incidentCount > 0 || noSafetyCount > 0) {
    referrals.push(t('referralSafety'));
  }
  if (referrals.length === 0) {
    referrals.push(t('referralPreventive'));
  }

  list.innerHTML = referrals.map((item) => `<li>${item}</li>`).join('');
}

function renderTable(checkins) {
  const rows = checkins
    .slice(0, 12)
    .map(
      (item) => `
      <tr>
        <td>${new Date(item.timestamp).toLocaleString()}</td>
        <td>${item.crew}</td>
        <td>${item.site}</td>
        <td>${item.workerName}</td>
        <td>${item.stress}</td>
        <td>${item.fatigue}</td>
        <td>${item.safetyReady === 'yes' ? t('ready') : t('notReady')}</td>
        <td>${item.incidentRecent === 'yes' ? t('recorded') : t('none')}</td>
      </tr>
    `,
    )
    .join('');

  document.querySelector('#checkins-table').innerHTML = rows || `<tr><td colspan="8">${t('emptyTable')}</td></tr>`;
}

function setStatus(message, type) {
  const el = document.querySelector('#status-message');
  el.textContent = message;
  el.className = `status-message ${type}`;
}

function average(values) {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function percentage(count, total) {
  if (!total) return 0;
  return Math.round((count / total) * 100);
}

function isHighRisk(item) {
  return item.stress >= 4 || item.fatigue >= 4 || item.safetyReady === 'no';
}

function t(key) {
  const copy = COPY[state.locale] || COPY.en;
  return copy[key] || COPY.en[key] || key;
}

function formatCopy(key, vars) {
  return t(key).replace(/\{([a-zA-Z]+)\}/g, (match, token) => (token in vars ? vars[token] : match));
}

function loadLocale() {
  const stored = localStorage.getItem(LOCALE_KEY);
  return COPY[stored] ? stored : 'en';
}

function persistLocale(locale) {
  localStorage.setItem(LOCALE_KEY, locale);
}

function loadCheckins() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const seeded = seedCheckins();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
      return seeded;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.map((item) => normalizeCheckin(item)) : seedCheckins();
  } catch {
    return seedCheckins();
  }
}

function persistCheckins(checkins) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(checkins));
}

function seedCheckins() {
  const now = Date.now();
  const demo = [
    { crew: 'Steel', site: 'North Yard', stress: 3, fatigue: 4, safetyReady: 'yes', incidentRecent: 'no', workerName: 'Anonymous', anonymous: true },
    { crew: 'Concrete', site: 'Tower A', stress: 4, fatigue: 4, safetyReady: 'no', incidentRecent: 'yes', workerName: 'Anonymous', anonymous: true },
    { crew: 'Electrical', site: 'Plant Room', stress: 2, fatigue: 3, safetyReady: 'yes', incidentRecent: 'no', workerName: 'M. Stone', anonymous: false },
    { crew: 'Logistics', site: 'West Access', stress: 2, fatigue: 2, safetyReady: 'yes', incidentRecent: 'no', workerName: 'A. Tega', anonymous: false },
    { crew: 'Steel', site: 'North Yard', stress: 4, fatigue: 5, safetyReady: 'no', incidentRecent: 'yes', workerName: 'Anonymous', anonymous: true },
    { crew: 'Concrete', site: 'Tower A', stress: 3, fatigue: 3, safetyReady: 'yes', incidentRecent: 'no', workerName: 'R. Bello', anonymous: false },
  ];

  return demo.map((item, index) => ({
    id: `seed-${index + 1}`,
    timestamp: new Date(now - index * 12 * 60 * 60 * 1000).toISOString(),
    notes: '',
    ...normalizeCheckin(item),
  }));
}

function normalizeCheckin(item) {
  return {
    id: String(item.id || crypto.randomUUID()),
    timestamp: item.timestamp ? new Date(item.timestamp).toISOString() : new Date().toISOString(),
    workerName: String(item.workerName || 'Anonymous'),
    anonymous: Boolean(item.anonymous),
    crew: String(item.crew || ''),
    site: String(item.site || ''),
    stress: Number(item.stress || 1),
    fatigue: Number(item.fatigue || 1),
    safetyReady: item.safetyReady === 'no' ? 'no' : 'yes',
    incidentRecent: item.incidentRecent === 'yes' ? 'yes' : 'no',
    notes: String(item.notes || ''),
  };
}
