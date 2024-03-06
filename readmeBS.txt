# Setting Up Bootstrap in Visual Studio Code

Bootstrap is a popular CSS framework that makes it easy to design responsive and mobile-first websites. Follow these steps to set up Bootstrap in Visual Studio Code for your web development projects.

## Step 1: Install Bootstrap

You can install Bootstrap using npm (Node Package Manager), which is a package manager for JavaScript projects. Open your terminal or command prompt and run the following command:

```bash
npm install bootstrap
```

This command will download and install Bootstrap in your project's `node_modules` folder.

## Step 2: Link Bootstrap in Your HTML Files

Once Bootstrap is installed, you need to link it in your HTML files. Add the following lines inside the `<head>` section of your HTML files:

```html
<link href="./node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
```

This line imports the Bootstrap CSS file into your HTML file.

## Step 3: Start Using Bootstrap Classes

With Bootstrap linked in your HTML files, you can now start using Bootstrap classes to style your elements. Refer to the [Bootstrap documentation](https://getbootstrap.com/docs/5.1/getting-started/introduction/) for a list of available classes and components.

## Step 4: Install Bootstrap IntelliSense Extension (Optional)

To enhance your development experience with Bootstrap, you can install the Bootstrap IntelliSense extension for Visual Studio Code. This extension provides autocompletion and suggestions for Bootstrap classes as you type.

To install the extension, open Visual Studio Code, go to the Extensions view by clicking on the square icon in the sidebar or pressing `Ctrl+Shift+X`, search for "Bootstrap 5 & Font Awesome 5", and click "Install".

## Step 5: Start Building Responsive Websites with Bootstrap

Now that you have Bootstrap set up in Visual Studio Code, you can start building responsive and stylish websites using Bootstrap's powerful CSS framework.
