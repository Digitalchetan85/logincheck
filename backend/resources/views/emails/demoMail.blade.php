<!DOCTYPE html>
<html>

<head>
    <title>Laravel 8 Send Email Example</title>
</head>

<body>

    <table rules="all" style="border-style: solid; border-color: #666;" cellpadding="10">
        <thead>
            <tr style='background: #eee;'>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>schedule</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ $details['name'] }}</td>
                <td>{{ $details['email'] }}</td>
                <td>{{ $details['phone'] }}</td>
                <td>{{ $details['schedule'] }}</td>
            </tr>
        </tbody>
    </table>

</body>

</html>
