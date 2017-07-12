# GET
El concepto GET es obtener información del servidor. Traer datos que están en el servidor, ya sea en un archivo o base de datos, al cliente.
Independientemente de que para eso tengamos que enviar (request) algún dato que será procesado para luego devolver la respuesta (response) que
esperamos, como por ejemplo un identificador para obtener una noticia de la base de datos.

http://blog.micayael.com/2011/02/09/metodos-get-vs-post-del-http/

# Codes

200 - OK: other case diffent to 2xx

202 - ACCEPTED: A 202 response is typically used for actions that take a long while to process. Its purpose is to allow a server to accept a request
for some other process (perhaps a batch-oriented process that is only run once per day) without requiring that the user agent’s connection to the
server persist until the process is completed.

204 - NO CONTENT: The 204 status code is usually sent out in response to a PUT, POST, or DELETE request, when the REST API declines to send back
any status message or representation in the response message’s body.

300 - REDIRECTION: other case diffent to 3xx

301 - MOVED PERMANENTLY: The 301 status code indicates that the REST API’s resource model has been significantly redesigned and a new permanent URI has been
assigned to the client’s requested resource. The REST API should specify the new URI in the response’s Location header and all future requests should be
directed to the given URI.

302 - FOUND: is a common way of performing URL redirection. An HTTP response with this status code will additionally provide a URL in the location
header field. The user agent (e.g. a web browser) is invited by a response with this code to make a second, otherwise identical, request to the new
URL specified in the location field.

303 - SEE OTHER: A 303 response indicates that a controller resource has finished its work, but instead of sending a potentially unwanted response body,
it sends the client the URI of a response resource. This can be the URI of a temporary status message, or the URI to some already existing, more permanent,
resource.

304 - NOT MODIFIED: 304 is used when the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match

400 - CLIENT ERROR: other case diffent to 4xx

401 - UNAUTHORIZED:  indicates that the client tried to operate on a protected resource without providing the proper authorization. It may have provided the
wrong credentials or none at all. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource.

403 - FORBIDDEN:  indicates that the client’s request is formed correctly, but the REST API refuses to honor it i.e. the user does not have the necessary
permissions for the resource. A 403 response is not a case of insufficient client credentials; that would be 401 (“Unauthorized”)

404 - NOT FOUND: The 404 error status code indicates that the REST API can’t map the client’s URI to a resource but may be available in the future.
Subsequent requests by the client are permissible.

405 - METHOD NOT ALLOWED:  indicate that the client tried to use an HTTP method that the resource does not allow. For instance, a read-only resource could support
only GET and HEAD, while a controller resource might allow GET and POST, but not PUT or DELETE.

406 - NOT ACCEPTABLE: The 406 error response indicates that the API is not able to generate any of the client’s preferred media types, as indicated by the Accept
request header. For example, a client request for data formatted as application/xml will receive a 406 response if the API is only willing to format data as
application/json.

408 - REQUEST TIMEOUT: The server did not receive a complete request message within the time that it was prepared to wait.

412 - PRECONDITION FAILED:  indicates that the client specified one or more preconditions in its request headers, effectively telling the REST API to carry out
its request only if certain conditions were met. A 412 response indicates that those conditions were not met, so instead of carrying out the request,
the API sends this status code.

415 - Unsupported Media Type:  API is not able to process the client’s supplied media type, as indicated by the Content-Type request header. For example,
a client request including data formatted as application/xml will receive a 415 response if the API is only willing to process data formatted as
application/json.

429 - TOO MANY REQUESTS: The user has sent too many requests in a given amount of time ("rate limiting").

500 - SERVER ERROR: other case diffent to 5xx

501 - Not Implemented: The server either does not recognize the request method, or it lacks the ability to fulfill the request. Usually this implies future
availability (e.g., a new feature of a web-service API).

502 - BAD GATEWAY: The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting
to fulfill the request.

503 - SERVICE UNAVAILABLE: The server is currently unable to handle the request due to a temporary overload or scheduled maintenance,
which will likely be alleviated after some delay

504 - GATEWAY TIMEOUT: The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed
to access in order to complete the request.

505 - HTTP VERSION NOT SUPPORTED: The server does not support, or refuses to support, the major version of HTTP that was used in the request message.

506 - VARIANT ALSO NEGOTIATES: The server has an internal configuration error: the chosen variant resource is configured to engage in transparent
content negotiation itself, and is therefore not a proper end point in the negotiation process.

507 - INSUFFICIENT STORAGE: The method could not be performed on the resource because the server is unable to store the representation
needed to successfully complete the request.

508 LOOP DETECTED: The server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity".
This status indicates that the entire operation failed.

510 - NOT EXTENDED: The policy for accessing the resource has not been met in the request. The server should send back all the information
necessary for the client to issue an extended request.

511 - NETWORK AUTHENTICATION REQUIRED: The client needs to authenticate to gain network access.The response representation SHOULD contain a link to a resource that allows the user to
submit credentials (e.g., with an HTML form).

599 - NETWORK CONNECT TIMEOUT ERROR: This status code is not specified in any RFCs, but is used by some HTTP proxies to signal a network connect
timeout behind the proxy to a client in front of the proxy.

http://restfulapi.net/http-status-codes/
https://httpstatuses.com/429
