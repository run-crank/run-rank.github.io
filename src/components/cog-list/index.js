import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import CogCard from '../cog-card';

import './_cog-list.scss';

const CogList = () => (
    <StaticQuery
        query={ graphql`
        query CogsQuery {
          cog: allDataJson(sort: {fields: cogs___label}) {
            nodes {
              cogs {
                img
                label
                name
                homepage
              }
            }
          }
        }        
    ` }
        render={ (data) => (
            <section className="cogs">
                <div className="container">
                    <div className="row">
                      {data.cog.nodes[0].cogs.map((cog, i) => (
                        <div className="col-4" key={cog.name}>
                            <CogCard cog={cog} />
                        </div>
                      ))}
                    </div>
                </div>
            </section>
        ) } />
);

export default CogList;
