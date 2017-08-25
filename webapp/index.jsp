<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/index.css">
    <script src="js/domDemo.js" charset="utf-8"></script>
    <title>DOM Demo</title>
</head>
<body>
<table class="table center">
    <tr>
        <th colspan="2">Football Teams Search</th>
    </tr>
    <tr>
        <td>
            Use the first text input to search for a team in the list.<br />
            Use the second to add a new, searchable team to the list.
        </td>
        <td>
            <ul id="teamList">
                <li>Packers</li>
                <li>Bears</li>
                <li>Steelers</li>
                <li>Seahawks</li>
                <li>Cowboys</li>
                <li>Raiders</li>
                <li>Giants</li>
                <li>Broncos</li>
                <li>Eagles</li>
            </ul>
    </tr>
    <tr>
        <td>
            <input type="text" id="teamSearch" placeholder="Search for a team!"/>
        </td>
        <td>
            <input type="button" onclick="searchForTeam();" value="Search" />
        </td>
    </tr>
    <tr>
        <td>
            <input type="text" id="teamAdd" placeholder="Add a team!"/>
        </td>
        <td>
            <input type="button" onclick="addTeam();" value="Add" />
        </td>
    </tr>
    <tr>
        <td id="pageMessage" colspan="2"></td>
    </tr>
</table>
</body>
</html>
