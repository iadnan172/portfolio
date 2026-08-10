$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Start()
Write-Host "Server listening on http://localhost:8080/"

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $path = $request.Url.LocalPath
    if ($path -eq "/") { $path = "/index.html" }
    
    $filePath = Join-Path "C:\Users\samee\.gemini\antigravity\scratch\terminal-portfolio" $path.TrimStart('/')
    
    if (Test-Path $filePath -PathType Leaf) {
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        if ($filePath.EndsWith(".html")) { $response.ContentType = "text/html" }
        elseif ($filePath.EndsWith(".css")) { $response.ContentType = "text/css" }
        elseif ($filePath.EndsWith(".js")) { $response.ContentType = "application/javascript" }
        
        $response.ContentLength64 = $bytes.Length
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $response.StatusCode = 404
    }
    $response.Close()
}
