async function getUpdates() {
    return fetch('https://api.cricapi.com/v1/currentMatches?apikey=d331eb69-7b42-4a46-bf78-e96b240f046e&offset=0')
        .then(data => data.json())
        .then(data => {
            if (data.status != 'success') {
                return
            }
            
            const matches = data.data
            if (!matches) {
                return []
            }

            const relevantdata = matches.map(
                match => `<td class="match-name">${match.name}: </td><td class="match-status">${match.status}</td>`
            )
            
            console.log(relevantdata)

            document.getElementById('match-table').innerHTML =
                `
                    <table id = "match-table"  class="table table-bordered table-dashed">
                        <thead>
                            <th>Name</th>
                            <th>Status</th>
                        </thead>
                        <tbody>
                ` +
                        relevantdata.map((match) => `<tr>${match}</tr>`).join('') +
                `
                        </tbody>
                    </table>
                `
        })
}

getUpdates()