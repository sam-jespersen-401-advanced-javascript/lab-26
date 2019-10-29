const { write, writeJson } = require('../writer');
const fs = require('fs');

jest.mock('fs');

describe('writer', () => {
  it('write works', () => {

    write('./', 'test');

    expect(fs.writeFileSync).toHaveBeenCalled();

  });
  
  it('write to json works', () => {

    writeJson('./', 'test');

    expect(fs.writeFileSync).toHaveBeenCalled();

  });


});