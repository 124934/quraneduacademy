import React from 'react';

interface IslamicLogoProps {
  className?: string;
  size?: number | string;
  color?: string; // default to official gold #FFAC00
}

export const IslamicLogo: React.FC<IslamicLogoProps> = ({
  className = 'w-10 h-10',
  color = '#FCB205',
}) => {
  return (
    <svg
      viewBox="0 0 320 380"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="quranEduGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDBF2A" />
          <stop offset="50%" stopColor="#FCB205" />
          <stop offset="100%" stopColor="#E59E02" />
        </linearGradient>
      </defs>

      <g fill={color === '#FCB205' ? 'url(#quranEduGoldGradient)' : color}>
        {/* Top 4-pointed Star Finial at Apex */}
        <polygon points="160,8 164,22 178,26 164,30 160,44 156,30 142,26 156,22" />

        {/* Outer Ogival Onion-Dome Arch */}
        {/* Left Arch Wing with Outward Flared Base */}
        <path d="M160,38 C150,56 112,98 80,132 C48,168 14,212 10,268 C8,284 14,296 24,304 C22,295 24,280 28,262 C34,220 66,178 98,140 C130,102 154,62 160,38 Z" />

        {/* Right Arch Wing with Outward Flared Base */}
        <path d="M160,38 C170,56 208,98 240,132 C272,168 306,212 310,268 C312,284 306,296 296,304 C298,295 296,280 292,262 C286,220 254,178 222,140 C190,102 166,62 160,38 Z" />

        {/* Hanging Cords & Sparkle Stars */}
        {/* Main Central Lantern Hanging Cord */}
        <rect x="159.2" y="44" width="1.6" height="66" />
        <circle cx="160" cy="70" r="1.8" />
        <circle cx="160" cy="90" r="2.2" />

        {/* Central Large Lantern (Fanoos) */}
        {/* Lantern Dome */}
        <path d="M160,110 C154,110 150,115 146,124 L174,124 C170,115 166,110 160,110 Z" />
        <circle cx="160" cy="108" r="1.8" />
        {/* Lantern Top Eaves */}
        <rect x="143" y="124" width="34" height="4" rx="1.5" />
        {/* Lantern Body with 3 Arched Panes */}
        <path
          fillRule="evenodd"
          d="M145,128 L175,128 L175,164 L145,164 Z M149,136 C149,132 152,130 154,130 C156,130 159,132 159,136 L159,160 L149,160 Z M161,136 C161,132 164,130 166,130 C168,130 171,132 171,136 L171,160 L161,160 Z"
        />
        {/* Lantern Bottom Eaves & Base */}
        <rect x="144" y="164" width="32" height="3.5" rx="1" />
        <path d="M147,167.5 C149,178 156,186 160,188 C164,186 171,178 173,167.5 Z" />
        <circle cx="160" cy="191" r="1.8" />

        {/* Left Hanging Lantern */}
        <line x1="102" y1="120" x2="102" y2="152" stroke={color === '#FCB205' ? 'url(#quranEduGoldGradient)' : color} strokeWidth="1.2" />
        <path d="M102,152 C98,152 95,155 93,160 L111,160 C109,155 106,152 102,152 Z" />
        <rect x="91" y="160" width="22" height="2" rx="0.8" />
        <path
          fillRule="evenodd"
          d="M93,162 L111,162 L111,184 L93,184 Z M96,168 C96,165 98,164 100,164 C102,164 104,165 104,168 L104,181 L96,181 Z M105,168 C105,165 107,164 109,164 C111,164 113,165 113,168 L113,181 L105,181 Z"
        />
        <rect x="92" y="184" width="20" height="2" rx="0.8" />
        <path d="M94,186 C96,192 100,196 102,197 C104,196 108,192 110,186 Z" />

        {/* Right Mid Hanging Lantern */}
        <line x1="218" y1="116" x2="218" y2="142" stroke={color === '#FCB205' ? 'url(#quranEduGoldGradient)' : color} strokeWidth="1.2" />
        <path d="M218,142 C214,142 211,145 209,149 L227,149 C225,145 222,142 218,142 Z" />
        <rect x="207" y="149" width="22" height="2" rx="0.8" />
        <path
          fillRule="evenodd"
          d="M209,151 L227,151 L227,171 L209,171 Z M212,156 C212,154 214,153 216,153 C218,153 220,154 220,156 L220,168 L212,168 Z"
        />
        <rect x="208" y="171" width="20" height="2" rx="0.8" />
        <path d="M210,173 C212,178 216,182 218,183 C220,182 224,178 226,173 Z" />

        {/* Far Right Lower Hanging Lantern */}
        <line x1="238" y1="130" x2="238" y2="168" stroke={color === '#FCB205' ? 'url(#quranEduGoldGradient)' : color} strokeWidth="1.2" />
        <path d="M238,168 C234,168 231,171 229,175 L247,175 C245,171 242,168 238,168 Z" />
        <rect x="227" y="175" width="22" height="2" rx="0.8" />
        <path
          fillRule="evenodd"
          d="M229,177 L247,177 L247,199 L229,199 Z M232,183 C232,180 234,179 236,179 C238,179 240,180 240,183 L240,195 L232,195 Z"
        />
        <rect x="228" y="199" width="20" height="2" rx="0.8" />
        <path d="M230,201 C232,207 236,211 238,212 C240,211 244,207 246,201 Z" />

        {/* Scattered 4-pointed Sparkle Stars around Lanterns */}
        <polygon points="132,122 134,129 141,131 134,133 132,140 130,133 123,131 130,129" />
        <polygon points="198,136 200,141 205,142 200,144 198,149 196,144 191,142 196,141" />
        <polygon points="120,172 121,175 125,176 121,177 120,181 119,177 115,176 119,175" />
        <polygon points="260,184 261,187 265,188 261,189 260,193 259,189 255,188 259,187" />

        {/* Open Holy Quran (Centerpiece) */}
        {/* Left Main Page */}
        <path d="M158,260 C136,224 100,204 80,202 C76,202 73,205 72,209 L56,244 C55,246 56,249 59,250 C86,262 128,288 156,314 L158,260 Z" />

        {/* Right Main Page */}
        <path d="M162,260 C184,224 220,204 240,202 C244,202 247,205 248,209 L264,244 C265,246 264,249 261,250 C234,262 192,288 164,314 L162,260 Z" />

        {/* Left Book Leaf Layer Accent */}
        <path d="M68,242 L90,208 C112,216 140,236 157,258 L156,264 C132,240 102,224 76,220 L62,252 L68,242 Z" />

        {/* Right Book Leaf Layer Accent */}
        <path d="M252,242 L230,208 C208,216 180,236 163,258 L164,264 C188,240 218,224 244,220 L258,252 L252,242 Z" />

        {/* Left Book Cover Outer Border Line */}
        <path d="M52,252 L36,259 C33,261 32,264 33,267 L44,288 C82,312 126,336 158,354 L158,342 C126,324 84,298 52,276 L52,252 Z" />

        {/* Right Book Cover Outer Border Line */}
        <path d="M268,252 L284,259 C287,261 288,264 287,267 L276,288 C238,312 194,336 162,354 L162,342 C194,324 236,298 268,276 L268,252 Z" />

        {/* Quran Book Spine Center Divider */}
        <rect x="158.8" y="258" width="2.4" height="54" rx="1.2" fill="#FFFFFF" />

        {/* Rehal Book Stand (Crossed Legs with Cutout Oval Motifs) */}
        {/* Left Leg & Foot */}
        <path
          fillRule="evenodd"
          d="M158,332 L116,368 C113,371 110,372 107,371 L96,366 C93,365 92,361 94,358 L126,332 L106,332 C101,332 97,334 95,338 L86,351 C83,355 80,357 77,355 C72,353 71,348 74,344 L94,314 C97,310 102,307 107,307 L158,307 Z M110,339 C113,339 116,341 116,344 C116,347 113,349 110,349 C107,349 104,347 104,344 C104,341 107,339 110,339 Z"
        />

        {/* Right Leg & Foot */}
        <path
          fillRule="evenodd"
          d="M162,332 L204,368 C207,371 210,372 213,371 L224,366 C227,365 228,361 226,358 L194,332 L214,332 C219,332 223,334 225,338 L234,351 C237,355 240,357 243,355 C248,353 249,348 246,344 L226,314 C223,310 218,307 213,307 L162,307 Z M210,339 C207,339 204,341 204,344 C204,347 207,349 210,349 C213,349 216,347 216,344 C216,341 213,339 210,339 Z"
        />
      </g>
    </svg>
  );
};
