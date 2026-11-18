import { ArrowUpRight, BookOpen, CalendarDays, ChartNoAxesColumnIncreasing, CircleDollarSign, GraduationCap, LayoutGrid, Users } from 'lucide-react';

const modules = [
  ['Resumen', LayoutGrid], ['Estudiantes', Users], ['Calificaciones', BookOpen],
  ['Asistencia', CalendarDays], ['Recaudos', CircleDollarSign],
];

const attendanceBars = [61, 75, 66, 83, 70, 88, 77, 91, 83, 100];
const latestItems = [
  ['Asistencia registrada', 'Grado 8.º · Hoy', CalendarDays],
  ['Boletines listos', 'Periodo 2 · Hoy', BookOpen],
  ['Pago registrado', 'Mensualidad · Ayer', CircleDollarSign],
];

export function CampusPreview() {
  return (
    <div className="campus-preview" aria-hidden="true">
      <div className="window-bar">
        <span className="window-dots"><i /><i /><i /></span>
        <span>GirGit EduSaaS 360</span>
        <span className="window-tag">Vista previa</span>
      </div>
      <div className="campus-interface">
        <div className="campus-sidebar">
          <div className="campus-logo"><GraduationCap /> <strong>EduSaaS <span>360</span></strong></div>
          <span className="campus-sidebar-label">PLATAFORMA</span>
          {modules.map(([label, Icon]) => <span key={label} className="campus-nav-item"><Icon /> {label}</span>)}
        </div>
        <div className="campus-main">
          <div className="campus-heading">
            <div><span>PERIODO ACADÉMICO 02</span><strong>Panel académico</strong></div>
            <div className="campus-avatar">GG</div>
          </div>
          <div className="campus-metrics">
            <div><span>Estudiantes</span><strong>842</strong><small>Matrícula activa</small></div>
            <div><span>Asistencia</span><strong>96,8 %</strong><small>Esta semana</small></div>
            <div><span>Recaudo</span><strong>92 %</strong><small>Del mes</small></div>
          </div>
          <div className="campus-bottom">
            <div className="chart-card">
              <strong>Asistencia por jornada</strong>
              <span>Últimos 10 días de clase</span>
              <div className="chart-bars">{attendanceBars.map((height, i) => <i key={i} style={{ '--bar-height': `${height}%` }} />)}</div>
            </div>
            <div className="activity-card">
              <strong>Actividad reciente</strong>
              {latestItems.map(([title, meta, Icon]) => <div key={title}><Icon /><span><b>{title}</b><small>{meta}</small></span></div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WebPreview() {
  return (
    <div className="web-preview" aria-hidden="true">
      <div className="web-preview-nav"><span>FORMA.</span><span>Estudio&nbsp;&nbsp;&nbsp; Proyectos&nbsp;&nbsp;&nbsp; Contacto</span></div>
      <div className="web-preview-body">
        <div><small>ESTUDIO DE DISEÑO</small><strong>Espacios para<br />vivir mejor.</strong><span>Ver proyectos <ArrowUpRight /></span></div>
        <div className="web-preview-art"><i /><i /><i /></div>
      </div>
    </div>
  );
}

const workQueues = [
  ['Por hacer', 'Inventario', 'Nuevos pedidos'], ['En proceso', 'Despachos', 'Actualización de stock'], ['Completado', 'Reporte semanal', 'Facturación'],
];

export function OperationsPreview() {
  return (
    <div className="operations-preview" aria-hidden="true">
      <div className="operations-nav"><span><ChartNoAxesColumnIncreasing /> Operaciones</span><i>Vista general</i></div>
      <strong>Tablero de trabajo</strong>
      <div className="operations-columns">
        {workQueues.map(([title, first, second]) => (
          <div key={title}><span><i /> {title}</span><b>{first}</b><b>{second}</b></div>
        ))}
      </div>
    </div>
  );
}
