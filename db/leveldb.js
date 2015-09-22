'use strict';
import level from 'level';
export default level('./db/cep', { valueEncoding: 'json' });
