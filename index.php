<?php
// XAMPP serves the production build; Vite uses index.html during development.
$buildFile = __DIR__ . '/dist/index.html';
if (!is_file($buildFile)) {
    http_response_code(503);
    header('Content-Type: text/plain; charset=utf-8');
    exit('Run npm install and npm run build to prepare the React website.');
}
header('Content-Type: text/html; charset=utf-8');
echo str_replace('./assets/', './dist/assets/', file_get_contents($buildFile));
