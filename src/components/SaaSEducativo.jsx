import { useState } from 'react';
import { ArrowRight, ChevronDown, Layers3 } from 'lucide-react';
import { PRODUCTS_STORE, SAAS_FEATURES, SAAS_ROLES_PREVIEWS } from '../data/softwareData';

const roles = [['rector', 'Directivos'], ['docente', 'Docentes'], ['padres', 'Familias'], ['estudiante', 'Estudiantes']];

export default function SaaSEducativo({ onOpenDemo, onSelectPlan }) {
  const [role, setRole] = useState('rector');
  const [students, setStudents] = useState(450);
  const { stats, description } = SAAS_ROLES_PREVIEWS[role];
  const planId = students <= 250 ? 'saas-basic' : students <= 800 ? 'saas-campus-pro' : 'saas-elite';
  const plan = PRODUCTS_STORE.find(({ id }) => id === planId);

  return (
    <section id="saas-educativo" className="section-band">
      <div className="section-wrap section-block">
        <div className="section-heading split-heading education-heading">
          <div><p className="eyebrow">GirGit EduSaaS 360</p><h2>Todo el colegio conectado</h2></div>
          <div><p>Directivos, docentes, estudiantes y familias tienen un espacio para lo que necesitan hacer cada día.</p><button className="text-link" type="button" onClick={onOpenDemo}>Solicitar demo de 15 días <ArrowRight /></button></div>
        </div>
        <div className="education-grid">
          <div className="education-panel">
            <div className="segmented" role="group" aria-label="Vista por perfil">
              {roles.map(([id, label]) => <button type="button" key={id} aria-pressed={role === id} onClick={() => setRole(id)}>{label}</button>)}
            </div>
            <div className="role-preview" aria-live="polite">
              <p>{description}</p>
              <small>Datos de ejemplo</small>
              <div className="role-metrics">
                {stats.map(({ value, label }) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
              </div>
            </div>
          </div>
          <div className="education-panel calculator">
            <Layers3 className="panel-icon" aria-hidden="true" />
            <h3>Encuentra tu plan</h3>
            <label htmlFor="students">Estudiantes matriculados <output htmlFor="students">{students.toLocaleString('es-CO')}</output></label>
            <input id="students" type="range" min="50" max="2500" step="50" value={students} onChange={(event) => setStudents(Number(event.target.value))} />
            <div className="plan-result" aria-live="polite"><span>Plan sugerido</span><strong>{plan.name}</strong></div>
            <button type="button" className="text-link" onClick={() => onSelectPlan(plan)}>Consultar este plan <ArrowRight /></button>
          </div>
        </div>
        <div className="module-grid" aria-label="Módulos disponibles">
          {SAAS_FEATURES.map(({ id, title, shortDesc }) => (
            <details className="module-details" key={id}><summary>{title.replaceAll(' & ', ' y ')} <ChevronDown /></summary><p>{shortDesc}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}
