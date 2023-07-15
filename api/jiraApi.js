import axios from 'axios';

const baseURL = 'https://herocoders.atlassian.net/rest/api/3';

export async function getComponents() {
  try {
    const componentsResponse = await axios.get(`${baseURL}/project/SP/components`);
    return componentsResponse.data;
  } catch (error) {
    console.error('Error retrieving components:', error);
    throw error;
  }
}

export async function getIssuesByComponent(component) {
  try {
    const jql = `project = SP AND component = "${component.name}"`;
    const issuesResponse = await axios.get(`${baseURL}/search?jql=${encodeURIComponent(jql)}`);
    return issuesResponse.data.total;
  } catch (error) {
    console.error(`Error retrieving issues for component "${component.name}":`, error);
    throw error;
  }
}

