<!DOCTYPE html>
<html>

<head>
    <title>Laravel 8 Send Email Example</title>
</head>

<body>

    <table rules="all" style="border-style: solid; border-color: #666;" cellpadding="10">
        <tbody>
            <tr>
                <th>Name</th>
                <td>{{ $details['name'] }}</td>
            </tr>
            <tr style='background: #eee;'>
                <th>Name</th>
                <td>{{ $details['name'] }}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{{ $details['email'] }}</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>{{ $details['phone'] }}</td>
            </tr>
            <tr>
                <th>Course Name</th>
                <td>{{ $details['coursename'] }}</td>
            </tr>
            <tr>
                <th>Amount</th>
                <td>{{ $details['amount'] }}</td>
            </tr>
            <tr>
                <th>Payment ID</th>
                <td>{{ $details['paymentid'] }}</td>
            </tr>
            <tr>
                <th>schedule</th>
                <td>{{ $details['schedule'] }}</td>
            </tr>
        </tbody>
    </table>

</body>

</html>
