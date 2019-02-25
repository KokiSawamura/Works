import { Sitemap } from 'domain/middleware/sitemap';

let table = '<table border="1">';
table += '<tr>';
table += '<td>';
table += 'Label';
table += '</td>';
table += '<td>';
table += 'Section';
table += '</td>';
table += '<td>';
table += 'Content';
table += '</td>';
table += '<td>';
table += 'Url';
table += '</td>';
table += '</tr>';


for (const i in Sitemap.CONTENT) {
  const label = Sitemap.CONTENT[i].text;
  const sections = Sitemap.CONTENT[i].list;

  for (const k in sections) {
    const sectionTitle = sections[k].text;
    const contents = sections[k].list;

    for (const x in contents) {
      const title = contents[x].text;
      const url = contents[x].url;

      table += '<tr>';

      table += '<td>';
      table += label;
      table += '</td>';

      table += '<td>';
      table += sectionTitle;
      table += '</td>';

      table += '<td>';
      table += title;
      table += '</td>';

      table += '<td>';
      table += url;
      table += '</td>';

      table += '</tr>';
    }
  }
}

table += '</table>';

document.writeln(table);
