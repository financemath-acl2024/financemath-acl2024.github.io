function generateTestTable() {
    var data = test_score_table; // The variable from model_scores_test.js
  
    var table = '<table class="js-sort-table" id="results">';
    table += `<tr>
                  <td class="js-sort-number"><strong>#</strong></td>
                  <td class="js-sort-number"><strong>Model</strong></td>
                  <td class="js-sort-number"><strong>Size</strong></td>
                  <td class="js-sort-number"><strong>Notes</strong></td>
                  <td class="js-sort-number"><strong>QU(P)</strong></td>
                  <td class="js-sort-number"><strong>QU(C)</strong></td>
                  <td class="js-sort-number"><strong>DE(P)</strong></td>
                  <td class="js-sort-number"><strong>DE(C)</strong></td>
                  <td class="js-sort-number"><strong>AC(P)</strong></td>
                  <td class="js-sort-number"><strong>AC(C)</strong></td>
                  <td class="js-sort-number"><strong>MA(P)</strong></td>
                  <td class="js-sort-number"><strong>MA(C)</strong></td>
                  <td class="js-sort-number"><strong>PO(P)</strong></td>
                  <td class="js-sort-number"><strong>PO(C)</strong></td>
                  <td class="js-sort-number"><strong>EC(P)</strong></td>
                  <td class="js-sort-number"><strong>EC(C)</strong></td>
                  <td class="js-sort-number"><strong>CO(P)</strong></td>
                  <td class="js-sort-number"><strong>CO(C)</strong></td>
                  <td class="js-sort-number"><strong><u>AVG(P)</u></strong></td>
                  <td class="js-sort-number"><strong><u>AVG(C)</u></strong></td>
              </tr>`;
  
    // add human performance to the top of the table
    table += `<tr>
              <td>-</td>
              <td><b>Human Performance</b></td>
              <td>-</td>
              <td>Open-book (expert)</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td><b>92.0</b></td>
              <td><b>92.0</b></td>
          </tr>`;
    table += `<tr>
          <td>-</td>
          <td><b>Human Performance</b></td>
          <td>-</td>
          <td>Open-book (non-expert)</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td><b>84.0</b></td>
          <td><b>84.0</b></td>
      </tr>`;
  
    table += `<tr>
      <td>-</td>
      <td><b>Human Performance</b></td>
      <td>-</td>
      <td>Close-book (expert)</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td><b>73.0</b></td>
      <td><b>73.0</b></td>
  </tr>`;
  
    table += `<tr>
        <td>-</td>
        <td><b>Human Performance</b></td>
        <td>-</td>
        <td>Close-book (non-expert)</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td><b>58.0</b></td>
        <td><b>58.0</b></td>
    </tr>`;
  
        // get all keys in data
        var keys = Object.keys(data);
  
        for (var i=0; i<keys.length; i++) {
          var key = keys[i];
          console.log(key);
          var entry = data[key];
  
          table += '<tr>';
          table += `<td>${key}</td>`
  
          table += `<td><b>${entry.Model}</b></td>`;
          table += `<td>${entry.Size}</td>`;
          table += `<td>${entry.Notes}</td>`;    
  
          table += `<td>${entry["QU(P)"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["QU(C)"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["DE(P)"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["DE(C)"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["AC(P)"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["AC(C)"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["MA(P)"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["MA(C)"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["PO(P)"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["PO(C)"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["EC(P)"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["EC(C)"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["CO(P)"].toFixed(1).toString()}</td>`;
          table += `<td>${entry["CO(C)"].toFixed(1).toString()}</td>`;
          table += `<td><b>${entry["AVG(P)"].toFixed(1).toString()}</b></td>`;
          table += `<td><b>${entry["AVG(C)"].toFixed(1).toString()}</b></td>`;
          }
          table += '</tr>';
  
    table += '</table>';
    document.getElementById('test_leaderboard').innerHTML = table; // Assuming you have a div with id 'container' where the table will be placed
  }
  
  // Call the function when the window loads
  document.addEventListener('DOMContentLoaded', generateTestTable);
  