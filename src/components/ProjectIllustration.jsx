import React from 'react';

function IlluEnergie({ id }) {
  return (
    <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={`skyE${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A0A0F"/>
          <stop offset="100%" stopColor="#1A1A2E"/>
        </linearGradient>
        <linearGradient id={`sunE${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF9A3C"/>
          <stop offset="100%" stopColor="#E8600A"/>
        </linearGradient>
        <radialGradient id={`glowE${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8600A" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#E8600A" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="480" height="220" fill={`url(#skyE${id})`}/>
      <ellipse cx="380" cy="40" rx="60" ry="60" fill={`url(#glowE${id})`}/>
      <circle cx="380" cy="40" r="28" fill={`url(#sunE${id})`} opacity="0.9"/>
      {[-40,-20,0,20,40].map((dx, i) => (
        <line key={i} x1={380+dx} y1="12" x2={380+dx} y2="4" stroke="#FF9A3C" strokeWidth="2" opacity="0.7"/>
      ))}
      {[-40,-20,0,20,40].map((dx, i) => (
        <line key={i+5} x1={380+dx} y1="68" x2={380+dx} y2="76" stroke="#FF9A3C" strokeWidth="2" opacity="0.7"/>
      ))}
      {[60,80,100,120,140,160,180,200,220,240].map((x, i) => (
        <g key={i}>
          <rect x={x} y="100" width="22" height="60" rx="2" fill="#1E1E2A" stroke="#E8600A" strokeWidth="0.5" opacity="0.8"/>
          <rect x={x+2} y="104" width="18" height="8" rx="1" fill="#E8600A" opacity="0.6"/>
          <rect x={x+2} y="116" width="18" height="8" rx="1" fill="#E8600A" opacity="0.4"/>
          <rect x={x+2} y="128" width="18" height="8" rx="1" fill="#E8600A" opacity="0.3"/>
          <rect x={x+2} y="140" width="18" height="8" rx="1" fill="#E8600A" opacity="0.2"/>
          <line x1={x+22} y1="109" x2={x+44} y2="109" stroke="#E8600A" strokeWidth="0.5" opacity="0.4"/>
        </g>
      ))}
      <polyline points="60,180 120,170 180,165 240,158 300,162 360,155 420,148" stroke="#E8600A" strokeWidth="1.5" fill="none" opacity="0.5" strokeDasharray="4 2"/>
      <rect x="0" y="200" width="480" height="20" fill="#0A0A0F" opacity="0.8"/>
      <text x="24" y="212" fontFamily="Inter,sans-serif" fontSize="9" fill="#4A4F5E" letterSpacing="2">ÉNERGIE & ÉLECTRICITÉ</text>
    </svg>
  );
}

function IlluClim({ id }) {
  return (
    <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={`bgC${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0D1826"/>
          <stop offset="100%" stopColor="#0A0A0F"/>
        </linearGradient>
        <radialGradient id={`coldC${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3BADE0" stopOpacity="0.2"/>
          <stop offset="100%" stopColor="#3BADE0" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="480" height="220" fill={`url(#bgC${id})`}/>
      <ellipse cx="240" cy="60" rx="160" ry="80" fill={`url(#coldC${id})`}/>
      <rect x="60" y="30" width="360" height="55" rx="6" fill="#1A2A3A" stroke="#3BADE0" strokeWidth="0.5" opacity="0.9"/>
      <rect x="72" y="42" width="336" height="10" rx="2" fill="#3BADE0" opacity="0.15"/>
      <rect x="72" y="56" width="200" height="8" rx="2" fill="#3BADE0" opacity="0.3"/>
      {[0,1,2,3,4,5,6].map((i) => (
        <ellipse key={i} cx={90 + i*45} cy={70} rx="6" ry="4" fill="#3BADE0" opacity={0.4 - i*0.04}/>
      ))}
      {[0,1,2,3,4].map((i) => (
        <g key={i}>
          <path
            d={`M${100+i*60},100 C${90+i*60},${120+i*3} ${110+i*60},${130+i*3} ${100+i*60},${150+i*2}`}
            stroke="#3BADE0" strokeWidth="1" fill="none" opacity={0.3 - i*0.04}
          />
          <path
            d={`M${115+i*60},105 C${125+i*60},${118+i*3} ${105+i*60},${128+i*3} ${115+i*60},${148+i*2}`}
            stroke="#A0D8EF" strokeWidth="0.8" fill="none" opacity={0.2}
          />
        </g>
      ))}
      {[60,100,140,180,220,260,300,340,380,420].map((x,i) => (
        <circle key={i} cx={x} cy={85+Math.sin(i)*15} r="1.5" fill="#3BADE0" opacity={0.4}/>
      ))}
      <rect x="0" y="200" width="480" height="20" fill="#0A0A0F" opacity="0.9"/>
      <text x="24" y="212" fontFamily="Inter,sans-serif" fontSize="9" fill="#4A4F5E" letterSpacing="2">CLIMATISATION & MAINTENANCE</text>
    </svg>
  );
}

function IlluPlomb({ id }) {
  return (
    <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={`bgP${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A0A0F"/>
          <stop offset="100%" stopColor="#0D1520"/>
        </linearGradient>
        <linearGradient id={`waterP${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E90C8" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#0A4A7A" stopOpacity="0.9"/>
        </linearGradient>
      </defs>
      <rect width="480" height="220" fill={`url(#bgP${id})`}/>
      <rect x="80" y="60" width="16" height="120" rx="8" fill={`url(#waterP${id})`} opacity="0.8"/>
      <rect x="80" y="80" width="100" height="16" rx="8" fill={`url(#waterP${id})`} opacity="0.7"/>
      <rect x="164" y="60" width="16" height="56" rx="8" fill={`url(#waterP${id})`} opacity="0.8"/>
      <rect x="164" y="80" width="120" height="16" rx="8" fill={`url(#waterP${id})`} opacity="0.7"/>
      <rect x="268" y="60" width="16" height="56" rx="8" fill={`url(#waterP${id})`} opacity="0.8"/>
      <rect x="268" y="100" width="100" height="16" rx="8" fill={`url(#waterP${id})`} opacity="0.7"/>
      <rect x="352" y="80" width="16" height="100" rx="8" fill={`url(#waterP${id})`} opacity="0.8"/>
      <circle cx="80" cy="60" r="10" fill="#1E90C8" opacity="0.6"/>
      <circle cx="180" cy="60" r="10" fill="#1E90C8" opacity="0.6"/>
      <circle cx="268" cy="60" r="10" fill="#1E90C8" opacity="0.6"/>
      <circle cx="352" cy="80" r="10" fill="#1E90C8" opacity="0.6"/>
      {[88,96,180,268].map((x, i) => (
        <rect key={i} x={x} y="84" width="8" height="8" rx="4" fill="#3BADE0" opacity="0.9"/>
      ))}
      {[0,1,2,3,4,5].map((i) => (
        <ellipse key={i} cx={88} cy={155+i*8} rx="3" ry="2" fill="#3BADE0" opacity={0.6-i*0.1}/>
      ))}
      <rect x="0" y="200" width="480" height="20" fill="#0A0A0F" opacity="0.9"/>
      <text x="24" y="212" fontFamily="Inter,sans-serif" fontSize="9" fill="#4A4F5E" letterSpacing="2">PLOMBERIE & ÉTANCHÉITÉ</text>
    </svg>
  );
}

function IlluBTP({ id }) {
  return (
    <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={`skyB${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F1520"/>
          <stop offset="100%" stopColor="#1A1A2E"/>
        </linearGradient>
        <linearGradient id={`bldB${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#252535"/>
          <stop offset="100%" stopColor="#1A1A28"/>
        </linearGradient>
      </defs>
      <rect width="480" height="220" fill={`url(#skyB${id})`}/>
      <rect x="40" y="110" width="60" height="90" rx="2" fill={`url(#bldB${id})`} stroke="#2A2A3E" strokeWidth="0.5"/>
      <rect x="130" y="70" width="80" height="130" rx="2" fill={`url(#bldB${id})`} stroke="#2A2A3E" strokeWidth="0.5"/>
      <rect x="240" y="50" width="100" height="150" rx="2" fill="#1E1E2E" stroke="#E8600A" strokeWidth="0.5" opacity="0.9"/>
      <rect x="360" y="90" width="70" height="110" rx="2" fill={`url(#bldB${id})`} stroke="#2A2A3E" strokeWidth="0.5"/>
      {[[44,120],[44,140],[44,160],[44,180],[76,120],[76,140],[76,160],[76,180]].map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width="12" height="12" rx="1" fill="#1E90C8" opacity="0.15"/>
      ))}
      {[[134,82],[134,102],[134,122],[134,142],[134,162],[174,82],[174,102],[174,122],[174,142],[174,162]].map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width="16" height="12" rx="1" fill="#1E90C8" opacity="0.2"/>
      ))}
      {[[248,62],[248,82],[248,102],[248,122],[248,142],[248,162],[292,62],[292,82],[292,102],[292,122],[292,142],[292,162],[270,180]].map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width="16" height="14" rx="1" fill="#E8600A" opacity={y===180?0:0.35}/>
      ))}
      <rect x="264" y="178" width="20" height="22" rx="1" fill="#E8600A" opacity="0.5"/>
      {[[364,102],[364,122],[364,142],[364,162],[394,102],[394,122],[394,142],[394,162]].map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width="12" height="12" rx="1" fill="#1E90C8" opacity="0.15"/>
      ))}
      <rect x="0" y="195" width="480" height="5" fill="#111118"/>
      <rect x="0" y="200" width="480" height="20" fill="#0A0A0F" opacity="0.9"/>
      <text x="24" y="212" fontFamily="Inter,sans-serif" fontSize="9" fill="#4A4F5E" letterSpacing="2">BTP & SERVICES TECHNIQUES</text>
    </svg>
  );
}

const ILLU = { energie: IlluEnergie, clim: IlluClim, plomb: IlluPlomb, btp: IlluBTP };

export default function ProjectIllustration({ domaine, id = 'default', className }) {
  const Comp = ILLU[domaine] || IlluBTP;
  return (
    <div className={className} style={{ lineHeight: 0 }}>
      <Comp id={id} />
    </div>
  );
}
