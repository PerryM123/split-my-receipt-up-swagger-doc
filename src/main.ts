import SwaggerUI from 'swagger-ui'
import 'swagger-ui-dist/swagger-ui.css';

SwaggerUI({
  url: './openapi.yaml',
  dom_id: '#app'
})
