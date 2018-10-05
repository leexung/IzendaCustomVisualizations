import {
  REPORT_PART_TYPES,
  CHART_STYLES,
  extendReportPartStyleConfiguration,
} from 'IzendaSynergy';

extendReportPartStyleConfiguration(REPORT_PART_TYPES.Chart, 'Custom Area', CHART_STYLES.Area, {
  visualLabel: 'Custom Area',

  // Configure custom container
  //fieldContainerSchema: [createFieldContainerSchema('ZValues', 'Z-Axis Values', 'ZValues', null, 1)]
});