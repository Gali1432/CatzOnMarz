<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $catName = $_POST["catName"];
    $adoptionDate = $_POST["adoptionDate"];
    $fullName = $_POST["fullName"];
    $email = $_POST["email"];
    $phoneNumber = $_POST["phoneNumber"];
    $additionalInfo = $_POST["additionalInfo"];

    // Connect to MongoDB whats our database name ?
    $mongoClient = new MongoDB\Client("mongodb://localhost:27017");
    $db = $mongoClient->selectDatabase('blah_database_name');
    $collection = $db->selectCollection('adoption_submissions');

    // creating a document with the form data
    $document = [
        'catName' => $catName,
        'adoptionDate' => $adoptionDate,
        'fullName' => $fullName,
        'email' => $email,
        'phoneNumber' => $phoneNumber,
        'additionalInfo' => $additionalInfo,
    ];

    // inserting the document into the MongoDB collection
    $collection->insertOne($document);

    //  redirecting the user to a thank you page ( still need to make a thank you page )
    header("Location: /path/to/thank-you-page.html");
    exit();
} else {
    // Redirect or display an error message if someone tries to access this script directly
    header("Location: /path/to/error-page.html");
    exit();
}
?>
