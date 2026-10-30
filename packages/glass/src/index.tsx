import {forwardRef,type HTMLAttributes} from 'react';
export interface GlassSurfaceProps extends HTMLAttributes<HTMLDivElement>{material?:'subtle'|'regular'|'prominent';}
export const GlassSurface=forwardRef<HTMLDivElement,GlassSurfaceProps>(function GlassSurface({material='regular',className='',...props},ref){return <div {...props} ref={ref} data-material={material} className={'uik-glass '+className}/>});
