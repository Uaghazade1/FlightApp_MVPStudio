<h1>Flight and Planning React Native Expo App</h1>

<p>Welcome to the <strong>Flight and Planning Expo App</strong>! This project is built using 
<a href="https://reactnative.dev/">React Native</a> and <a href="https://expo.dev/">Expo</a>. 
It provides a cross-platform mobile application that runs on both iOS and Android devices.</p>

<h2>Features</h2>
<ul>
  <li><strong>Cross-Platform</strong>: Runs on both iOS and Android.</li>
  <li><strong>React Native with Expo</strong>: Powered by React Native, using the Expo framework for faster development and easy deployment.</li>
  <li><strong>Static Profile Screen</strong>: Displays a static user profile with avatar, name, bio, etc.</li>
  <li><strong>City Travel Plans Screen</strong>: Shows predefined travel plans with things to do in different cities.</li>
</ul>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#getting-started">Getting Started</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#running-the-app">Running the App</a></li>
  <li><a href="#building-the-app">Building the App</a></li>
  <li><a href="#dependencies">Dependencies</a></li>
  <li><a href="#troubleshooting">Troubleshooting</a></li>
</ul>

<h2 id="getting-started">Getting Started</h2>
<p>To get started with this project, follow these steps.</p>

<h3>Prerequisites</h3>
<p>Make sure you have the following installed on your local development machine:</p>
<ul>
  <li><strong>Node.js</strong>: <a href="https://nodejs.org/">Download Node.js</a></li>
  <li><strong>Expo CLI</strong>: Install Expo globally by running:
    <pre><code>npm install -g expo-cli</code></pre>
  </li>
  <li><strong>Expo Go App</strong>: Download Expo Go on your mobile device from the 
    <a href="https://apps.apple.com/us/app/expo-go/id982107779">App Store (iOS)</a> or 
    <a href="https://play.google.com/store/apps/details?id=host.exp.exponent">Google Play Store (Android)</a>.
  </li>
</ul>

<h2 id="installation">Installation</h2>
<ol>
  <li><strong>Clone the Repository</strong>:
    <pre><code>git clone https://github.com/Uaghazade1/FlightApp_MVPStudio.git</code></pre>
  </li>
  <li><strong>Navigate to the Project Directory</strong>:
    <pre><code>cd FlightApp_MVPStudio</code></pre>
  </li>
  <li><strong>Install Dependencies</strong>:
    <pre><code>npm install</code></pre>
  </li>
</ol>

<h2 id="running-the-app">Running the App</h2>
<p>Once you have installed the dependencies, you can start the development server and run the app on your mobile device or emulator.</p>

<h3>On a Physical Device</h3>
<ol>
  <li>Start the Expo development server:
    <pre><code>expo start</code></pre>
  </li>
  <li>Scan the QR code that appears in your terminal using the <strong>Expo Go</strong> app on your phone.</li>
</ol>

<h3>On an Emulator</h3>
<p>To run on an emulator, you will need either an Android emulator or an iOS simulator:</p>
<ul>
  <li><strong>For Android:</strong>
    <ul>
      <li>Ensure you have Android Studio installed with an AVD (Android Virtual Device) configured.</li>
      <li>Run the following command:
        <pre><code>expo start --android</code></pre>
      </li>
    </ul>
  </li>
  <li><strong>For iOS:</strong>
    <ul>
      <li>Ensure you have Xcode installed on your Mac.</li>
      <li>Run the following command:
        <pre><code>expo start --ios</code></pre>
      </li>
    </ul>
  </li>
</ul>

<h2 id="building-the-app">Building the App</h2>
<p>To build the app for production and generate a standalone APK (Android) or IPA (iOS), you can use Expo's build service.</p>
<ol>
  <li>Make sure you're logged in to Expo:
    <pre><code>expo login</code></pre>
  </li>
  <li>Build the Android APK:
    <pre><code>expo build:android</code></pre>
  </li>
  <li>Build the iOS app:
    <pre><code>expo build:ios</code></pre>
  </li>
</ol>
<p>Follow the instructions that appear in the terminal to download your build or publish your app.</p>

<h2 id="dependencies">Dependencies</h2>
<p>Here are some key dependencies that are used in this project:</p>
<ul>
  <li><strong>React Native</strong>: The core library for building mobile apps.</li>
  <li><strong>Expo</strong>: A framework and platform for universal React applications.</li>
  <li><strong>React Navigation</strong>: Used for navigation between screens.</li>
  <li><strong>Expo Blur</strong>: For providing blur effects.</li>
  <li><strong>Icons</strong>: From <code>@expo/vector-icons</code> for using Material and Ionicons.</li>
</ul>
<p>Check the <code>package.json</code> file for the full list of dependencies and their versions.</p>

<h2 id="troubleshooting">Troubleshooting</h2>
<ul>
  <li><strong>Metro Bundler Issues:</strong> If you encounter errors with Metro bundler, try clearing the cache and restarting the server:
    <pre><code>expo start -c</code></pre>
  </li>
  <li><strong>Installation Issues:</strong> If you face issues during <code>npm install</code>, try deleting the <code>node_modules</code> directory and <code>package-lock.json</code> file, and reinstall dependencies:
    <pre><code>rm -rf node_modules package-lock.json
npm install</code></pre>
  </li>
  <li><strong>Expo App Doesn't Load:</strong> If the Expo Go app doesn't load the project, make sure your mobile device and development machine are on the same network.</li>
</ul>

<h2>License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
