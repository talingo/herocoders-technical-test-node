import { getComponents } from '../api/jiraApi.js';

export async function getComponentsWithoutLead() {
  const components = await getComponents();
  return components.filter(component => !component.lead);
}

