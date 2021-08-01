import * as React from 'react';
import {
  contentAuthors,
  pastContentAuthors,
} from '../../../content/authors/contributors';

export default function ContributorsSection() {
  return (
    <div className="bg-white dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="text-lg mx-auto">
            <p className="text-base text-center leading-6 text-blue-600 dark:text-blue-300 font-semibold tracking-wide uppercase">
              Contributors
            </p>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
              By the Community, for the Community.
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-8 mb-6 mx-auto">
              Interested in joining the USACO Guide team? We are recruiting
              Content Authors to help us improve the USACO Guide!{' '}
              <a
                href="https://docs.google.com/document/d/13xR2A2mOftVzlC6QTSkm3zLLdFtI1NhlzRWJ81FfU9U/edit"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 dark:text-blue-400 font-bold"
              >
                Apply here.
              </a>{' '}
              If you're in the United States, you can earn volunteer hours too!
            </p>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10">
              Current Content Authors:
            </h1>
            <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
              {contentAuthors.map(author => (
                <li key={author.name}>
                  <div className="space-y-4">
                    <img
                      className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                      src="https://i5.walmartimages.com/asr/be185d13-7b20-4595-bcdd-23bbe85f0074_1.d8c962e9921cd7f824d40d2f70adec30.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
                      alt=""
                    />
                    <div className="space-y-2">
                      <div className="text-xs font-medium lg:text-sm">
                        <a
                          href={`https://github.com/${author.githubUsername}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 dark:text-blue-400"
                        >
                          <h3>{author.name}</h3>
                        </a>{' '}
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 list-disc list-inside text-xs space-y-2 mb-6">
                        Since {author.sinceDate}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10">
              Past Content Authors:
            </h1>
            <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
              {pastContentAuthors.map(author => (
                <li key={author.name}>
                  <div className="space-y-4">
                    <img
                      className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
                      src="https://i5.walmartimages.com/asr/be185d13-7b20-4595-bcdd-23bbe85f0074_1.d8c962e9921cd7f824d40d2f70adec30.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
                      alt=""
                    />
                    <div className="space-y-2">
                      <div className="text-xs font-medium lg:text-sm">
                        <a
                          href={`https://github.com/${author.githubUsername}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 dark:text-blue-400"
                        >
                          <h3>{author.name}</h3>
                        </a>{' '}
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 list-disc list-inside text-xs space-y-2 mb-6">
                        Since {author.sinceDate}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
