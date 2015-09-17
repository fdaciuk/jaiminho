'use strict';
import levelup from 'levelup';
export default levelup('./db/cep', { valueEncoding: 'json' });
