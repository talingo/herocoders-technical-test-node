import { writeFileSync } from 'fs';
import { getComponentsWithoutLead } from './services/componentService.js';
import { getIssueCountForComponent } from './services/issueService.js';

async function main() {
  try {
    const componentsWithoutLead = await getComponentsWithoutLead();

    for (const component of componentsWithoutLead) {
      const issueCount = await getIssueCountForComponent(component);
      component.issueCount = issueCount;
    }

    console.log('Components without a component lead:');
    for (const component of componentsWithoutLead) {
      console.log(`- ${component.name}: ${component.issueCount} issue(s)`);
    }

    writeFileSync('output.txt', JSON.stringify(componentsWithoutLead, null, 2));
    console.log('Output written to output.txt');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
