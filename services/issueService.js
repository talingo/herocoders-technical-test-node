import { getIssuesByComponent } from '../api/jiraApi.js';

export async function getIssueCountForComponent(component) {
  return await getIssuesByComponent(component);
}
