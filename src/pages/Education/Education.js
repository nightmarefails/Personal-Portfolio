
import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { EducationItem, Institution, Degree } from './styles';

const Education = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Education</SectionTitle>
        <ul>
          {user.education.map((education, i) => (
            <EducationItem key={i}>
              <Institution>{education.institution}</Institution>
              <div>
                <Degree>
                  {education.studyType}, {education.area}
                </Degree>{' '}
                <span> &sdot; </span>
                <span>
                  {education.start.year} to {education.end.year}
                </span>
              </div>
              <Paragraph>{education.description.replace('\n\n', '\n')}</Paragraph>
            </EducationItem>
          ))}
        </ul>
      </div>
      <div>
        <SectionTitle>Certificates</SectionTitle>
        <ul>
          {user.certificates.map((certificate, i) => (
            <EducationItem key={i}>
              <Institution>{certificate.issuer}</Institution>
              <div>
                <Degree>
                  {certificate.name}
                </Degree>{' '}
                <span> &sdot; </span>
                <span>
                  {certificate.fullDate.month}, {certificate.fullDate.year}
                </span>
              </div>
              <Paragraph>{certificate.summary.replace('\n\n', '\n')}</Paragraph>
            </EducationItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Education;