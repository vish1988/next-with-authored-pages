import dynamic from 'next/dynamic';
import Context from '../utils/Context';
import ComponentInfo from '../utils/ComponentInfo';

const DynamicComponent3WithNoSSR = dynamic({
  loader: () => import('./hello3'),
  loading: () => <p>Loading ...</p>,
  ssr: false
});

export default ({ context }) => (
  <div>
    <ComponentInfo
      name="Hello2"
      onClick={() => alert('Hello 2 component clicked!')}
    />
    <Context context={context} />
    <br />
    <div>
      <p style={{ textDecoration: 'underline' }}>
        Dynamic component "Hello3" with NO SSR:
      </p>
      <DynamicComponent3WithNoSSR />
      (part of Hello2)
    </div>
  </div>
);
