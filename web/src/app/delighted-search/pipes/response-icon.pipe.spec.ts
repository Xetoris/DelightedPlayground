import { ResponseIconPipe } from './response-icon.pipe';

describe('ResponseIconPipe', () => {
  let pipe = new ResponseIconPipe();

  it('can transform a "bad" rating', () => {
    expect(pipe.transform('bad')).toEqual('fa-sad-tear');
  });

  it('can transform an "okay" rating', () => {
    expect(pipe.transform('okay')).toEqual('fa-meh');
  });

  it('can transform an "good" rating', () => {
    expect(pipe.transform('good')).toEqual('fa-grin-stars');
  });

  it('defaults to a "okay" rating', () => {
    expect(pipe.transform('not-valid')).toEqual('fa-meh');
  });

  it('can handle a null value', () => {
    expect(pipe.transform(null)).toEqual('fa-meh');
  });
});
